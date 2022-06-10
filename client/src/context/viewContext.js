import React, {useState} from "react"

const ViewContext = React.createContext()

function ViewProvider({children}){
    const [views, setViews] = useState([])

    return (
        <ViewContext.Provider value={{views, setViews}}>
            {children}
        </ViewContext.Provider>
    )
}

export {ViewContext, ViewProvider}