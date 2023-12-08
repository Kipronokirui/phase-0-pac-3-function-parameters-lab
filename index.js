const name = "Victor Kiprono"
const language="JavaScript"
function introduction(name) {
    console.log(`Hi, my name is ${name}.`)
}
introduction(name)
function introductionWithLanguageOptional(name, language){
    if (language == "JavaScript"){
        console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`)
    } else{
        console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`)
    }
}
introductionWithLanguageOptional(name, language)