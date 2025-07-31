import { Omega } from '../server/sintax.js';
import { get, post } from '../server/functions/decorators.js';
import { render } from '../server/functions/templates.js';
import { MySql } from '../orm/requests/requests.js';

class MiApp extends Omega {

  @get('/')
  home(req, res) {
    return render(res, 'index')
  }


  @get('/hola')
  async home_post(req, res) {
    const sql = new MySql()
    const data = await sql.select_where_equal('*', 'auth', 'username', 'justin')
    return res.json(data)
  }

}

const app = new MiApp();

app.listen(8080);
