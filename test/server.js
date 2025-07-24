import { Omega } from '../server/sintax.js';
import { get, post } from '../server/functions/decorators.js';
import { render } from '../server/functions/templates.js';
import { Sqlite } from '../orm/requests/request_db.js';

class MiApp extends Omega {
    @get('/')
    home(req, res) {
      return render(res,'index')
    }
    
    @get('/hola')
    home_post(req, res){
      const sql = new Sqlite()
      sql.select()

      return res.send('hoal bro')
    }

}

const app = new MiApp();
app.listen(3000);
