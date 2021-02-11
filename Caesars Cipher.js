function rot13(str) {
    let arr = str.split('');
    arr = arr.map((item) => {
      const deNum = item.charCodeAt(0);
      if(deNum >= 65 && deNum <= 90) {
        let decode = deNum-13;
        if(decode < 65) {
          decode = 90-(13-(deNum-65+1))
        }
          return String.fromCharCode(decode);
     
      } else {
        return item;
      }
      
    })
    return arr.join('');
  }