import { Omega } from '../server/sintax.js';
import { get, post } from '../server/functions/decorators.js';
import { render } from '../server/functions/templates.js';

class Myapp extends Omega{
    // route
    @get('/')
    //method
    mymethod(req, res){
        return render(res, 'mytemplate')
    }
}

// execute server
const PORT = 8080
new Myapp().listen(PORT)

