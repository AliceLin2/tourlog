import React, {useState} from "react"

const CityContext = React.createContext()

function CityProvider({children}){
    const [cities, setCities] = useState([])

    return (
        <CityContext.Provider value={{cities, setCities}}>
            {children}
        </CityContext.Provider>
    )
}

export {CityContext, CityProvider}