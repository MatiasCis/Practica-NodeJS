import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasources";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service"


const fileSystemRepository = new LogRepositoryImpl(
    new FileSystemDatasource()
)



export class Server {

    public static start(){

        console.log('Server started...')

        CronService.createJob(
            '*/5 * * * * *',
            () => {
                const url = 'https://google.com'
                new CheckService(
                    fileSystemRepository,
                    () => console.log( `${ url } is OK!` ),
                    ( error ) => console.log( error )
                ).execute(url);
                // new CheckService().execute('http://localhost:3000/');


            }
        );

    }
}


