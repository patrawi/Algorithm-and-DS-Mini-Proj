function convertToRoman(num) {
    const arr = [1000,900,500,400,100,90,50,40,10,9,5,4,1] ;
    const arrRoman = ["M", "CM","D", "CD","C", "XC", "L", "XL", "X", "IX", "IV", "I"] 
    let str = '' 
    for(let i = 0; i < arr.length; i++) {
        while(num >= arr[i]) {
            str +=arrRoman[i];
            num -= arr[i];
            console.log(num);

        }   
    }
    return str;
}