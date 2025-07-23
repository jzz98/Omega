import { Omega } from '../server/sintax.js';
import { get, post } from '../server/functions/decorators.js';
import { render } from '../server/functions/templates.js';

class MiApp extends Omega {
  @get('/')
  home(req, res) {
    return render(res,'index')
  }
  
  @get('/hola')
  home_post(req, res){
    res.send("hola mundo")
  }

}

const app = new MiApp();
app.listen(3000);
