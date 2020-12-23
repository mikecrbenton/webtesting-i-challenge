module.exports = {
  success,
  fail,
  repair,
  get,
};
/*
const item = {
   name: "",
   durability: ,   // number 0 to 100
   enhancement:    // number 0 to 20
}
 */

function success(item) {
   if(item.enhancement === 20){
      return { ...item };
   }else if(item.enhancement < 20){ 
      return { ...item, enhancement: item.enhancement + 1}
   }
}

function fail(item) {
   // UNDER 15----------------
   if( item.enhancement < 15 ){

      if( item.durability <= 5 )
         return { ...item, durability: 0 };
      else{
         return { ...item, durability: item.durability - 5 };
      }
   // EQUALS 15----------------
   }else if( item.enhancement === 15 ){ 
      
      if( item.durability <= 5 )
         return { ...item, durability: 0 };
      else{
         return { ...item, durability: item.durability - 10 };
      }
   // ABOVE 15------------------
   }else if( item.enhancement > 15 ){

      if( item.durability <= 5 )
         return { ...item, 
            durability: 0, 
            enhancement: (item.enhancement - 1) }
      else{
         return { ...item, 
            durability: (item.durability - 10), 
            enhancement: (item.enhancement - 1) }
      }
   }
} // end fail()

function repair(item) {
  return { ...item, durability : 100 };
}

function get(item) {
   if( item.enhancement === 0 ){ 
      return { ...item };
   }else if( item.enhancement > 0 ){
      return { ...item, name: `[+${item.enhancement}] ${item.name}` }
   }
}
