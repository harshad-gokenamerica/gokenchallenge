import HeroImageOverlay from "~/components/Generic/HeroImageOverlay/HeroImageOverlay"
import ImageAndText from "~/components/Generic/ImageAndText/ImageAndText"
import { imagesAndTexts, joinTheTeamButtons } from "~/data/landing-page-data"
import HeaderTextAndButton from "~/components/Generic/HeaderTextAndButton/HeaderTextAndButton"

export default function Home(){
    return (
        <>
            <HeroImageOverlay/>
            <HeaderTextAndButton element={joinTheTeamButtons[0]}/>
            <HeaderTextAndButton element={joinTheTeamButtons[1]}/>
            {imagesAndTexts.map(ele =><ImageAndText element={ele} key={ele.id}/> )}
        </>
    )
}