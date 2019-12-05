function findUser(Collection, filter){
    return new Promise((resolve, reject) =>{
        Collection.findOne(filter)
        .then(data =>{  
            if(data){
                resolve(data)
            }else{
                resolve('not found')
            }
        })
        .catch(err =>{
            reject(err)
        })
        

    })
}

module.exports = {
    findUser
}