export const deleteUtil = (array , itemToRemove) => {
  

     let filterMap = array.filter(val => val.uid !== itemToRemove);
  return filterMap

    
}