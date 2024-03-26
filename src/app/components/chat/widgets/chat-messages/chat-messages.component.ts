import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LoadingService } from '../../../../services/loading.service';
import { Message } from '../../../../utils/message.data';
import { ChatService } from '../../../../services/chat.service';
import { userData } from '../../../../utils/constants';

@Component({
  selector: 'app-chat-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-messages.component.html',
  styleUrl: './chat-messages.component.scss'
})
export class ChatMessagesComponent implements AfterViewInit {
  @ViewChild('chatContainer', { static: false }) public chatContainer!: ElementRef;

  public messages: Message[] = [];
  public userData = userData

  constructor(
    public loading: LoadingService,
    private msjService: ChatService,
  ) { }
  ngAfterViewInit(): void {
    this.msjService.messages$.subscribe(msj => {
      console.log(msj);
      this.messages = msj
    })
  }
}
