import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasources";
import { MongoLogDatasource } from "../infrastructure/datasources/mongo-log.datasource";
import { PostgresLogDatasource } from "../infrastructure/datasources/postgres-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service"
import { EmailService } from "./email/email.service";


const fsLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource(),
    // new MongoLogDatasource(),
    // new PostgresLogDatasource(),
)

const mongoLogRepository = new LogRepositoryImpl(
    new MongoLogDatasource(),
)

const postgresLogRepository = new LogRepositoryImpl(
    new PostgresLogDatasource(),
)
const emailService = new EmailService();



export class Server {

    public static async start(){

        console.log('Server started...')
        // // TODO SEND EMAIL ATTACHMENTS
        // new SendEmailLogs(
        //     emailService,
        //     fileSystemLogRepository
        // ).execute([    'matyxd03@gmail.com'])

        // emailService.sendEmailWithFileSystemLogs([
        //     'matyxd03@gmail.com'
        // ])
        

        // const logs = await logRepository.getLogs(LogSeverityLevel.high)
        // console.log(logs)


        CronService.createJob(
            '*/5 * * * * *',
            () => {
                const url = 'https://google.com'
                new CheckServiceMultiple(
                    [fsLogRepository, mongoLogRepository, postgresLogRepository],
                    () => console.log( `${ url } is OK!` ),
                    ( error ) => console.log( error )
                ).execute(url);
                // new CheckService().execute('http://localhost:3000/');
                // console.log(envs)

            }
        );

    }
}


