import { envs } from "../config/plugins/envs.plugin";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasources";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service"
import { EmailService } from "./email/email.service";


const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource()
)
const emailService = new EmailService();



export class Server {

    public static start(){

        console.log('Server started...')
        // TODO SEND EMAIL ATTACHMENTS
        new SendEmailLogs(
            emailService,
            fileSystemLogRepository
        ).execute([    'matyxd03@gmail.com'])

        // emailService.sendEmailWithFileSystemLogs([
        //     'matyxd03@gmail.com'
        // ])
        




        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = 'https://google.com'
        //         new CheckService(
        //             fileSystemRepository,
        //             () => console.log( `${ url } is OK!` ),
        //             ( error ) => console.log( error )
        //         ).execute(url);
        //         // new CheckService().execute('http://localhost:3000/');
        //         // console.log(envs)

        //     }
        // );

    }
}


