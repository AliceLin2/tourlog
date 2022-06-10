import React, {useState, createContext} from "react"

const CityContext = createContext()

function CityProvider({children}){
    const [cities, setCities] = useState([])

    return (
        <CityContext.Provider value={{cities, setCities}}>
            {children}
        </CityContext.Provider>
    )
}

export {CityContext, CityProvider}