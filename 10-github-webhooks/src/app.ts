import express from 'express';
import { envs } from './config';
import { GithubController } from './presentation/github/controller';
import { GithubSha256 } from './presentation/github/middlewares/github-sha256.middleware';


(()=> {
  main();
})();


function main() {

  const app = express();

  const controller = new GithubController();

  app.use( express.json() );

  app.use(GithubSha256.verifyGithubSignature)

  app.post('/api/github', controller.webhookHandler );



  app.listen( envs.PORT, () => {
    console.log(`App running on port ${ envs.PORT }`);
  })


}