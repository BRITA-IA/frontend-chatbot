import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { StartPageComponent } from './widgets/start-page/start-page.component';
import { ChatMessagesComponent } from './widgets/chat-messages/chat-messages.component';
import { Init } from 'v8';
import { ChatService } from '../../services/chat.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [SideNavComponent, StartPageComponent, ChatMessagesComponent, FormsModule, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit {
  @ViewChild(ChatMessagesComponent, { static: false }) childComponent!: ChatMessagesComponent;

  inputValue: string = ''
  chatState: boolean = false
  menuOpen: boolean = false;
  constructor(
    private msjService: ChatService,
    public loading: LoadingService,
  ) { }

  ngOnInit(): void {
    this.msjService.getChatState().subscribe(data => {
      this.chatState = data
    })
  }

  sendMessage(ev: any) {
    const message = ev.target.value;
    if (this.childComponent) {
      this.msjService.scrollToBottom(this.childComponent.chatContainer)
    }
    this.msjService.initChat()
    this.msjService.addMessage(message).subscribe(() => {
      this.inputValue = ''

      if (this.childComponent) {
        this.msjService.scrollToBottom(this.childComponent.chatContainer)
      }
    })
  }
  open() {
    this.menuOpen = !this.menuOpen;
    console.log(this.menuOpen);
  }


}
