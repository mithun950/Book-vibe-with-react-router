 
 const getStoreReadList = () => {
   const storeListStr = localStorage.getItem('read-list');
   if(storeListStr){
    const storeList = JSON.parse(storeListStr);
    return storeList;
   }
   else{
    return [];
   }
 }


 const addToStoredReadList = (id) => {
     const storeList = getStoreReadList();
     if(storeList.includes(id)){
        console.log(id,"already exist")
     }

     else{
        storeList.push(id);
        const storeListStr = JSON.stringify(storeList);
        localStorage.setItem('read-list', storeListStr)
     }

 }
 const getStoreWishList = () => {
   const storeListStr = localStorage.getItem('wish-list');
   if(storeListStr){
    const storeList = JSON.parse(storeListStr);
    return storeList;
   }
   else{
    return [];
   }
 }


 const addToStoredWishList = (id) => {
     const storeList = getStoreWishList();
     if(storeList.includes(id)){
        console.log(id,"already exist")
     }

     else{
        storeList.push(id);
        const storeListStr = JSON.stringify(storeList);
        localStorage.setItem('wish-list', storeListStr)
     }

 }

 export{addToStoredReadList,addToStoredWishList,getStoreReadList,getStoreWishList}