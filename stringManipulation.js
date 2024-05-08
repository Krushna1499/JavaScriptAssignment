export function captalize (sentence) {
    let str =sentence.split(" ")
   str= str.map(item=>
    {
        return item[0].toUpperCase()+item.slice(1);

    })
    return str.join(" ")
}






export function captalizeAll (sentence1) {
    let str =sentence1.split("")             //convert string into array
    
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

export function getOccurrenceCount(st,OccurenceWord)
{
    let strr = st.split(" ")
   let count=0;
    
    for(let i=0;i<strr.length;i++)
        {
            if(strr[i]===OccurenceWord)
                count ++;
        }
        if(count>0)
            {
                console.log(count);
            }
            else
            {
                console.log(`${count}`);
            }

}

export function wordDensity(st1,OccurenceWord1)
{
    let strr = st1.split(" ")
    let count1=0;
     
     for(let i=0;i<strr.length;i++)
         {
             if(strr[i]===OccurenceWord1)
                 count1 ++;
         }
         if(count1>0)
             {
                 console.log(count1);
             }
             else
             {
                 console.log(`${count1}`);
             }
 
           return (count1/strr.length)*100;
}

export function getExt()
{

}

export function removeWhitespace(ss)
{
    let s2=ss.split('');

    for(let i =0 ;i<ss.length;i++)
        {
            if(ss!="  ")
                {
                    s2 =s2+s2[i];
                }
        
        }
        return s2;
} 

