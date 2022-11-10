export const customStylesSelect = {
        option: (styles, {isSelected}) => ({
            ...styles,
            cursor: "pointer",
            padding: "6px 10px",
            fontWeight: "500",
            fontSize: "14px",
            borderRadius: 4,
            zIndex: 9,
            display: "flex",
            
            ":hover": { 
                backgroundColor: "#7EBD57",
            },

            ...(isSelected
                ? {
                    backgroundColor: "#7EBD57",
                    fontWeight: 400,
                    borderRadius: "5px",
                    padding: "4px 7px",
                    verticalAlign: "middle",
                    color: "#fff",
                    ".custom-form-group .form-check-label": {
                      fontWeight: "inherit",
                    },
                  }
                : {}),
        }),
        control: (provided) => ({
          ...provided,
          border: "solid 2px #7EBD57",
          borderRadius: 50,
          padding: 5,
          color: "#7EBD57"
        }),
        input: (styles) => ({
            ...styles,
            padding: "10px",
            color: "#7EBD57"
        }),
        indicatorSeparator: (styles) => ({
            ...styles,
            backgroundColor: "none",
          }),
          placeholder: (styles) => ({
            ...styles,
            color: "#7EBD57",
            fontSize: 16,
            lineHeight: "24px",
            fontWeight: 500,
            display: "flex",
            padding: "10px"
          }),

        menu: (styles) => ({
            ...styles,
            padding: 10,
            zIndex: 9,
            margin: 0,
        }),
        menuList: (styles) => ({
            ...styles,
            maxHeight: "180px",
            padding: 0,
            zIndex: 9,
        }),
        multiValue: (styles, { isDisabled }) => ({
            ...styles,
            backgroundColor: "#fff",
            border: "1px solid #7EBD57",
            borderRadius: "50rem",
            margin: "3px",
            ":hover": { backgroundColor: "#7EBD57", color: "fff" },
          }),
          multiValueLabel: (styles, _state) => ({
            ...styles,
            padding: "2px 6px",
            color: "#7EBD57",
            ".form-group": {
              marginBottom: 0,
            },
          }),
          multiValueRemove: (styles) => ({
            ...styles,
            paddingLeft: 0,
            paddingRight: 0,
            svg: {
              width: 16,
              height: 16,
              borderRadius: "50rem",
              marginRight: 4,
              background: "#7EBD57",
              color: "#fff",
            },
            ":hover": {
              backgroundColor: "transparent",
              color: "#fff",
            },
          }),

      }