import { Omega } from '../server/sintax.js';
import { get, post } from '../server/functions/decorators.js';
import { render } from '../server/functions/templates.js';
import { Sqlite } from '../orm/requests/requests.js';

class MiApp extends Omega {
    @get('/')
    home(req, res) {
      return render(res,'index')
    }
    
    @get('/hola')
    async home_post(req, res){
      const sql = new Sqlite()
      let args = ['name', 'email']
      const data = await sql.select("*","auth")
      console.log(data)
      return res.json(data)
    }

}

const app = new MiApp();
app.listen(8080);
 