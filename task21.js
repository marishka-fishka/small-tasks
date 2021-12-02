//Modify the kebabize function so that it converts a camel case string into a kebab case.

function kebabize(str) {  
    return str.replace(/[0-9]/g, '').split(/(?=[A-Z])/).join('-').toLowerCase()  
    }
    