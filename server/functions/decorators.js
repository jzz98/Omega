export function get(path) {
  return function (target, propertyKey, descriptor) {
    if (!target.routes) target.routes = [];
    target.routes.push({ method: 'get', path, handlerName: propertyKey });
  };
}

export function post(path){
    return function (target, propertyKey, descriptor){
        if (!target.routes) target.routes = [];
        target.routes.push({method: 'post', path, handlerName: propertyKey})
    }
}