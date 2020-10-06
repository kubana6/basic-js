const CustomError = require("../extensions/custom-error");
const deletNextElement ='--discard-next'
const deletPrevElement ='--discard-prev'
const doubleNextElement ='--double-next'
const doublePrevElement ='`--double-prev'

module.exports = function transform(arr=0) {
  if (arr === 0 || isNaN(arr) && arr === null) {
    throw new CustomError('THROWN')
  }
  if(arr.length === 0) {
    return []
  }
    
  const dublicatArr = arr.reduce((acc, rec, index ) => {
         if(acc[index-1] === deletNextElement) {
           return acc 
         } else if(arr[index+1] === deletPrevElement) {
           return acc
         } else if(acc[index-1] === doubleNextElement) {
          rec  *= 2
          return [...acc,rec]
         }else if(arr[index+1] === doublePrevElement) {
          rec  *= 2
          return [...acc,]
         } 
         return [...acc, rec] 
        }, [])
        
  return  dublicatArr.filter(it => typeof it === 'number')

  // if(dublicatArr.indexOf(deletNextElement) >= 0  ) {
     
  // }
  // const newArr = arr.reduce((acc, rec,index) => {
  //    switch(rec) {
  //      case(deletNextElement):
  //        index + 1
  //        return acc
  //      case(deletPrevElement):
  //       acc.pop
  //       return acc
  //      case(doubleNextElement):
  //      index +1
        
  //      return 
  //      case(doublePrevElement):
  //      index - 1
  //      return rec * 2
  //      default: 
  //       return [...acc,rec]
       
  //    }
  // },[])
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
