function telephoneCheck(str) {
    const regexSd = /^([+]?1[\s]?)?(\d{3})-(\d{3})-(\d{4})$/gi;
    const regexWithparen = /^([+]?1[\s]?)?\((\d{3}\))(\d{3})-(\d{4})$/gi;
    const regexWithparendash = /^([+]?1[\s]?)\((\d{3}\))\s(\d{3})-(\d{4})$/gi;
    const regexwithspace = /^([+]?1[\s]?)(\d{3}) (\d{3}) (\d{4})/gi;
    const regex = /(\d{10})/;
    const regexInter = /^(1|)?(\d{3})(\d{3})(\d{4})$/gi;
    if(str.match(regexSd)) {
      return true;
    } else if(str.match(regexWithparen)) {
      return true;
    } else if (str.match(regexWithparendash)) {
      return true;
    } else if(str.match(regexwithspace)) {
      return true; 
    } else if(str.match(regexInter)) {
      return true;
    } else if(str.length >= 10) {
      return false;
    }
    return false;
  }