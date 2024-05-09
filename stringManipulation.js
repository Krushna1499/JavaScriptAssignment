export function captalize (sentence) {
    let str =sentence.split(" ")
   str= str.map(item=>
    {
        return item[0].toUpperCase()+item.slice(1);

    })
    return str.join(" ")
}
export function captalizeAll (sentence1) {
    let str =sentence1.split("")          //convert string into array
    
    for(let i =0;i<str.length;i++)
        {
            str[i]=String.fromCharCode(str[i].charCodeAt(0)-32)

        }
        return str.join("")   //convert array into string

}

export function isExist(str){
    let st =str.includes("Hello")

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
    let s2=ss.split(" ");
    let s3 = "";
    for(let i =0 ;i<s2.length;i++)
        {
            if(s2[i]!=" ")
                {
                    s3 =s3+ss[i];
                }
        
        }
        return s3;
} 

export function reverseWords(s)
{
    let s1 = s.length;
    let result = "";
    for(let i =0;i<=s1-1;i++)
        {
            result =result + s[s1-i-1]
        }
        return result;

}

export function countVowels(s)
{
   const vowels ='aeiouAEIOU';
   let count = 0;

   for(let i= 0;i<s.length;i++)
    {
        if(vowels.includes(s[i]))
            {
                count++;
            }
            
    }
    return count;
}

export function isPalindrome (str)
{

}

export function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

export function maskString()
{
    
}