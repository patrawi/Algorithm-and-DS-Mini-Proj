function palindrome(str) {

    let arr = str.match(/[\w0-9]/ig);
    arr = arr.filter((item) => item != '_');
    console.log(arr);
    const newStr = arr.join('').toLowerCase();
    const newStr2 = arr.reverse().join('').toLowerCase();
    if(newStr === newStr2) {
      return true;
    }
    return false;
  }
  
  