
 export type UserId = string;

export interface Chat {
    id:string;
    userId:UserId;
    name:string;
    message:string;
    upvotes:UserId[];
}



export abstract class Store {
    constructor() {
        
    }
    initRoom(rooId:string){

    }

    getChats(room:string, limit:number, offset:number){

    }
    
    addChats(userId: UserId,name:string,roomId:string, message:string){

    }

    upvote(userId: UserId, room:string, chatId:string){

    }


}