function captalize (sentence) {
    let str =sentence.split(" ")
    for(let i=0;i<str.length;i++)
        {
          
            str[i]=str[i][1].toUpperCase()+str[i].substring(1);
        }
        return str.join(" ");
   
}
console.log(captalize("i love Myself"));
console.log(captalize("training centre"));