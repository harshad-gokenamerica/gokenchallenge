import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { slice, intersection, capitalize } from 'lodash'
import { Row, Col, Card, Button, Spinner     } from 'react-bootstrap'
import Select, { components } from 'react-select'
import { IoIosArrowForward } from "react-icons/io";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { customStylesSelect } from './customStyles'
import { joinTheTeamButtons } from "~/data/landing-page-data"
import HeaderTextAndButton from "~/components/Generic/HeaderTextAndButton/HeaderTextAndButton"

const Option = (props) => {
    return (
      <div>
        <components.Option {...props}>
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={v=>null}
          />{" "}
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };


export default function JobsListing(){  
    // const [loadingOptions, setLoadingOptions] = useState(true)
    const [loading, setLoading] = useState(true)
    const [jobsList, setJobsList] = useState([])
    const [jobsListCopy, setJobsListCopy] = useState([])
    const [isCompleted, setIsCompleted] = useState(false)
    const [index, setIndex] = useState(6)
    const [locations, setLocations] = useState([])
    const [workplaces, setWorkplaces] = useState([])
    const [departments, setDepartments] = useState([])
    const [selectedFilters, setSelectedFilters] =  useState(new Map())
    const [searchQuery, setSearchQuery] = useState("")
    const [selectBoxOpen, setSelectBoxOpen] = useState(false)
    const [view, setView] = useState("grid-view")

    const createJobsList = async () => {
            const leverUrl = `https://api.lever.co/v0/postings/hopper?mode=json`
            setLoading(true)
            try{
                const response = await axios.get(leverUrl)
                const data = await response.data
                setJobsList(data)
                setJobsListCopy(data)
                setSelectedFilters(new Map([
                    ["location", []],
                    ["workplaceType", []],
                    ["department", []]
                ]))
            }catch(err){
                console.log(err.message)
            }
            setLoading(false)
    }

    const createInputOptionsList = (jobsList) => {
        // setLoadingOptions(true)
        let locationOptions = []
        let workplaceTypeOptions = []
        let departmentOptions = []
        
        jobsList.forEach(job => {
            const {categories: { location, department }, workplaceType} = job
            if(!locationOptions.find( loc => (loc.label === location))) locationOptions.push({label: location, value: location})
            if(!workplaceTypeOptions.find( workplace => (workplace.label === workplaceType))) workplaceTypeOptions.push({label: workplaceType, value: workplaceType})
            if(!departmentOptions.find( dept => (dept.label === department))) departmentOptions.push({label: department, value: department})
        })

        locationOptions.sort()
        workplaceTypeOptions.sort()
        departmentOptions.sort()

        setLocations(locationOptions)
        setWorkplaces(workplaceTypeOptions)
        setDepartments(departmentOptions)
        // setLoadingOptions(false)
    }
    
    const loadMoreHandler = () => {
        setIndex(index + 6)
        if (index >= jobsList.length) {
            setIsCompleted(true)
        } else {
            setIsCompleted(false)
        }
    }

    const searchHandler = (event) => {        
        setSearchQuery(event.target.value)
      }

    const handleChange = (e, type) => {
        const newMap = new Map(selectedFilters)
        if (newMap && (!newMap.has(type))) newMap.set(type, [])
        newMap.set(type, e)
        setSelectedFilters(newMap)
    }
    

    const updateJobsList = () => {
        const matchLocation = jobsListCopy.filter(job => {
            const {categories: {location}} = job
            return (!selectedFilters.get("location").length) 
            || selectedFilters.get("location").some(val => val?.value === location)
        })
        
        const matchDept = jobsListCopy.filter(job => {
            const {categories: {department}} = job
             return (!selectedFilters.get("department").length) 
            || selectedFilters.get("department").some(val => val?.value === department)
        })

        const matchWorkPlace = jobsListCopy.filter(job => {
            const {workplaceType} = job
            return (!selectedFilters.get("workplaceType").length) 
            || selectedFilters.get("workplaceType").some(val => val?.value === workplaceType)
        })

        const matchSearch = jobsListCopy.filter( job => {
            const { text } = job
            return text.toLowerCase().includes(searchQuery.toLowerCase())
        })   

        const allFilteredJobs = intersection(matchLocation, matchWorkPlace, matchDept, matchSearch)
        
        setJobsList(allFilteredJobs)
        
    }

    useEffect(() => {   
        updateJobsList()
    }, [selectedFilters, searchQuery])

    useEffect(() => {   
        createInputOptionsList(jobsList)
    }, [loading])

    useEffect(() => {   
        createJobsList()
    }, [])


    return (
            <Row xs={12}className="p-2 p-md-5 justify-content-center"> 
                <HeaderTextAndButton element={joinTheTeamButtons[4]} variant={"gray"}/>

                {loading ? (
                        <Spinner
                        as="span"
                        variant="succcess"
                        animation="border"
                        size="lg"
                        role="status"
                        aria-hidden="true"
                        />
                    ) : (
                        <Row id="goken-jobs-filter-wrapper" className={`p-5 ${loading ? "disabled" : ""}`}>
                            <Col sm={11} className="p-0 pb-0 p-lg-5">
                                <Col sm={12} className="mb-2">
                                    <input id="input" className="goken-jobs-search search form-control" onChange={searchHandler} placeholder="Search" />
                                </Col>
                                <Row>                                    
                                <Col sm={12} md={4} className="mb-2">
                                    
                                    <Select 
                                        styles={customStylesSelect}
                                        options={locations} 
                                        value={selectedFilters.get("location")}
                                        isMulti
                                        placeholder="Location"
                                        closeMenuOnSelect={false}
                                        hideSelectedOptions={false}
                                        components={{Option}}
                                        onChange={e => handleChange(e, "location")}
                                        onMenuOpen={() => setSelectBoxOpen(true)}
                                        onMenuClose={() => setSelectBoxOpen(false)}
                                    />
                                </Col>
                                <Col sm={12} md={4} className="mb-2">
                                    <Select 
                                        styles={customStylesSelect}
                                        options={workplaces} 
                                        isMulti
                                        placeholder="Type"
                                        value={selectedFilters.get("workplaceType")}
                                        closeMenuOnSelect={false}
                                        hideSelectedOptions={false}
                                        components={{Option}}
                                        onChange={e => handleChange(e, "workplaceType")}
                                        onMenuOpen={() => setSelectBoxOpen(true)}
                                        onMenuClose={() => setSelectBoxOpen(false)}
                                    />
                                </Col>
                                <Col sm={12} md={4} className="mb-2">
                                    <Select 
                                        styles={customStylesSelect}
                                        options={departments} 
                                        isMulti
                                        placeholder="Department"
                                        value={selectedFilters.get("department")}
                                        closeMenuOnSelect={false}
                                        hideSelectedOptions={false}
                                        components={{Option}}
                                        onChange={e => handleChange(e, "department")}
                                        onMenuOpen={() => setSelectBoxOpen(true)}
                                        onMenuClose={() => setSelectBoxOpen(false)}
                                    />
                                </Col>
                                </Row>
                            </Col>
                            <Col sm={1} className="d-flex flex-md-column flex-lg-row justify-content-center">
                                    <Button 
                                        onClick={() => setView("grid-view")}
                                        className={`bg-white border-0 ${(view === "grid-view") ? "disabled ":""} mx-1`}
                                        data-toggle="tooltip"
                                        title="Grid view"
                                    >
                                        <BsFillGridFill color='black'/>
                                    </Button>
                                    <Button 
                                        onClick={() => setView("list-view")}
                                        className={`bg-white border-0 ${(view === "list-view") ? "disabled":""}`}
                                        data-toggle="tooltip"
                                        title="List view"
                                    >
                                        <BsList color='black' size={25}/>
                                    </Button>
                                </Col>

                        </Row>
                    )}
                
                    <Row xs={12} 
                        className={`job-listings-wrapper g-5 m-0 ${selectBoxOpen ? "pe-none":""} ${view === "grid-view" ? "grid-view" : "list-view"}`}
                        >
                        {slice(jobsList, 0, index).map((job) => {
                            const {id, text, categories: {location}, workplaceType, descriptionPlain} = job
                            const truncatedDescription = slice(descriptionPlain, 0, 120)
                            return <>
                                <Col 
                                    sm={`${view === "grid-view" ? 6 : 12}`}
                                    lg={`${view === "grid-view" ? 4 : 12}`}
                                    >
                                    <Card 
                                        className={"job-listings-single-job rounded-0"}

                                        >
                                        <Card.Body className={`position-relative p-1 ${view === "list-view" ? "d-lg-flex" : ""}`}>
                                            <Col 
                                                        sm={`${view === "grid-view" ? 12 : 10}`}
                                                        lg={`${view === "grid-view" ? 12 : 10}`}
                                            >
                                                <div 
                                                    className={`d-flex ${view === "grid-view" 
                                                    ? "flex-column"  : "flex-column-reverse"}`}
                                                >
                                                    <Card.Text className="py-2 m-0">{capitalize(workplaceType)}</Card.Text>
                                                    <Card.Title
                                                        className="job-listings-single-job-title"
                                                    >
                                                        {text}
                                                    </Card.Title>
                                                </div>
                                                {(view === "grid-view") ? <>
                                                <Card.Text>{truncatedDescription}...</Card.Text>
                                                </>: ""}
                                            </Col>
                                            {(view === "grid-view") ? <>
                                                <Col className="pt-4 d-flex justify-content-between">
                                                        <Card.Text 
                                                            className="job-listings-single-job-location"
                                                            >{location}
                                                        </Card.Text>
                                                            
                                                        <a className="button stretched-link job-listings-single-job-link"
                                                            href={`/careers/${id}`}
                                                        >
                                                            <IoIosArrowForward/>
                                                        </a>
                                                </Col>
                                            </>: 
                                            <>
                                                <Col sm={12} lg={2} className="pt-4 d-flex justify-content-between">
                                                        <Card.Text
                                                            className="job-listings-single-job-location"
                                                            >{location}
                                                        </Card.Text>
                                                        <a className="button stretched-link job-listings-single-job-link"
                                                            href={`/careers/${id}`}
                                                        >
                                                            <IoIosArrowForward/>
                                                        </a>
                                                </Col>  
                                            </>
                                            }
                                            
                                        </Card.Body>

                                    </Card>
                                </Col>
                            </>
                        })}
                    </Row>
                        
                
                <Row className="p-3 justify-content-center">
                    {isCompleted ? (
                        <Button onClick={loadMoreHandler} className="button-primary disabled">That's It</Button>
                    ) : (
                    <Button onClick={loadMoreHandler} className="button-primary">Load More +</Button>
                    )}
                </Row>
            </Row>
    )
}