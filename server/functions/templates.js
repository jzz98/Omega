export function render(res, name, data){
    if(typeof name !== 'string'){
        console.error('error, neeed to be a string')
    }
    
    res.render(name)
}