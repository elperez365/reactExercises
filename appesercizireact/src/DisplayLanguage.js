import React from "react";
import LanguageContext from "./LanguageContext";


const Strings ={
    en: {
        LANG_SELECTED: "The selected language is :"
    },
    it:{
        LANG_SELECTED: "La lingua selezionata è :"
    }
}



class DisplayLanguage extends React.Component{

render(){
    return(
        <LanguageContext.Consumer>
            {(Language) => {
                return (
                    <h1>
                        {Strings[Language].LANG_SELECTED} {Language=="it"?<span>Italiano</span>:<span>Inglese</span>}
                    </h1>
                )
            }}
        </LanguageContext.Consumer>
    )
}


}


export default DisplayLanguage