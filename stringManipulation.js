export function captalize (sentence) {
    let str =sentence.split(" ")
   str= str.map(item=>
    {
        return item[0].toUpperCase()+item.slice(1);

    })
    return str.join(" ")
}






export function captalizeAll (sentence1) {
    let str =sentence1.split("")                     //convert string into array
    
    for(let i =0;i<str.length;i++)
        {
            str[i]=String.fromCharCode(str[i].charCodeAt(0)-32)

        }
        return str.join("")   //convert array into string

}

export function isExist(str){
    let st =str.includes("Onkar")

    if(st)
        {
            console.log("it is Available");
    
        }
        else
        {
            console.log("It is not Available");
        }
}

export function getOccurrenceCount()
{
    let strr = st
}

