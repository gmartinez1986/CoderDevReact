import packages from "./packages"
  
 const getFetch = new Promise((resolve, reject)=>{
    
    let url = 'packages.com'
      
      if (url === 'packages.com') {
        setTimeout(() => {
          resolve(packages)        
        }, 3000);
      }else{
        reject('400 not found')
      }
  })

  export default getFetch
