import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { Message } from '../utils/message.data'
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINT } from '../utils/constants'
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private chatStart: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private messages: Message[] = [];
  private messagesSubject: BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>([]);
  public messages$: Observable<Message[]> = this.messagesSubject.asObservable();

  constructor(
    private http: HttpClient,
    private loading: LoadingService,
  ) {

  }

  initChat() {
    this.chatStart.next(true);
  }

  getChatState() {
    return this.chatStart.asObservable()
  }


  addMessage(question: string): Observable<void> {
    const m: Message = {
      id: 1,
      message: question,
      user: 'Juan'
    };
    
    this.loading.setLoading(true);
    this.messages.push(m);
    this.messagesSubject.next([...this.messages])
    return this.http.post(`${API_ENDPOINT}/question`, { question }).pipe(
      map((res: any) => {
        console.log('hola');
        const mb: Message = {
          id: 2,
          message: res,
          user: 'Bot'
        };
        this.messages.push(mb);
        this.messagesSubject.next([...this.messages])
        this.loading.setLoading(false);
        return;
      })
    );
  }


  scrollToBottom(chatContainer: ElementRef): void {
    try {
      setTimeout(() => {
        const chatContainerEl = chatContainer.nativeElement;
        // Calcula la diferencia entre la altura del contenido y la altura del contenedor
        const scrollDifference = chatContainerEl.scrollHeight - chatContainerEl.clientHeight;
        // Hace scroll hacia abajo suavemente
        chatContainerEl.scrollTo({ top: scrollDifference, behavior: 'smooth' });
      });
    } catch (err) { }
  }

}
