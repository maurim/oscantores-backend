import { Request, Response } from 'express';
import HTTP_STATUS from 'http-status-codes';
import mongoose from 'mongoose';
import { MessageCache } from '@service/redis/message.cache';
import { chatService } from '@service/db/chat.service';
import { IMessageData } from '@chat/interfaces/chat.interface';


const messageCache: MessageCache = new MessageCache();

export class Get {
  public async conversationList(req: Request, res: Response): Promise<void> {
    let list: IMessageData[] = [];
    const cachedList: IMessageData[] = await messageCache.getUserConversationList(`${req.currentUser!.userId}`);
    if (cachedList.length) {
      list = cachedList;
    } else {
      const curs: string | any = new mongoose.Types.ObjectId(req.currentUser!.userId);
      list = await chatService.getUserConversationList(curs);
    }

    res.status(HTTP_STATUS.OK).json({ message: 'User conversation list', list });
  }

  public async messages(req: Request, res: Response): Promise<void> {
    const { receiverId } = req.params;

    let messages: IMessageData[] = [];
    const cachedMessages: IMessageData[] = await messageCache.getChatMessagesFromCache(`${req.currentUser!.userId}`, `${receiverId}`);
    if (cachedMessages.length) {
      messages = cachedMessages;
    } else {
      const reqs: string | any = new mongoose.Types.ObjectId(req.currentUser!.userId);
      const recs: string | any = new mongoose.Types.ObjectId(receiverId);
      messages = await chatService.getMessages(
        reqs,
        recs,
        { createdAt: 1 }
      );
    }

    res.status(HTTP_STATUS.OK).json({ message: 'Mensagens de bate-papo do usuário', messages });
  }
}
