
import { useContext } from "react";
import LanguageContext from "./LanguageContext";


const Strings ={
    en: {
        LANG_SELECTED: "The selected language is :"
    },
    it:{
        LANG_SELECTED: "La lingua selezionata è :"
    }
}



function DisplayLanguage (){
    const language=useContext(LanguageContext)

    return(
        
            
         <h1>
             {Strings[language].LANG_SELECTED} {language==="it"?<span>Italiano</span>:<span>English</span>}
         </h1>
            
            
        
    )



}


export default DisplayLanguage