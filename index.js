function introduction(name = "Josh") {
    return(`Hi, my name is ${name}.`);
}

function introductionWithLanguage(name,language) {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

const language="JavaScript"
function introductionWithLanguageOptional(name,language="JavaScript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

