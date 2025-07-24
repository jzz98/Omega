// get method
export function get(path) {

  // target is the prototype of the object, propertyKey is the method 
  return function (target, propertyKey, descriptor) {
    if (!target.routes) target.routes = [];
    // pushing the routes
    target.routes.push({ method: 'get', path, handlerName: propertyKey });
  };
}

export function post(path){
    return function (target, propertyKey, descriptor){
        if (!target.routes) target.routes = [];
        target.routes.push({method: 'post', path, handlerName: propertyKey})
    }
}