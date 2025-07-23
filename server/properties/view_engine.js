export function set_view_engine(server,name){
    if(!name || typeof name !== 'string' ){
        console.error("error", "Need to be a string")
        return;
    }

    server.set('view engine', name)
}