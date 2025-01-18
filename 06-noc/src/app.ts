import { Server } from "./presentation/server";
import { LogModel, MongoDatabase } from './data/mongo';
import { envs } from "./config/plugins/envs.plugin";
import { PrismaClient } from "@prisma/client";


(async() => {
    await main();
})();


async function main(){
    // console.log( envs )
    
    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME,
    })
    
    const prisma = new PrismaClient();
    // const newLog = await prisma.logModel.create({
    //     data:{
    //         level: 'HIGH',
    //         message: 'Test message',
    //         origin: 'App.ts'
    //     }
    // });
    // console.log({ newLog })

    // const logs = await prisma.logModel.findMany({
    //     where:{
    //         level: 'HIGH'
    //     }
    // });

    // console.log(logs);



    // Crear una coleccion = tables, documento = registro

    // const newLog = await LogModel.create({
    //     message: 'Test message from Mongo',
    //     origin: 'App.ts',
    //     level: 'low',
    // });

    // await newLog.save();
    // console.log(newLog);
    

    // const logs = await LogModel.find();
    // console.log(logs)


    Server.start()
}