import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from '../../../../services/chat.service';
import { ChatMessagesComponent } from '../chat-messages/chat-messages.component';
import { recomendations } from '../../../../utils/constants';

@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.scss'
})
export class StartPageComponent {

  @Input() childComponent!: ChatMessagesComponent;
  recomendations = recomendations

  constructor(
    private msjService: ChatService,
  ) { }

  sendRecomendation(recomendation: string) {
    this.msjService.initChat()
    if (this.childComponent) {
      this.msjService.scrollToBottom(this.childComponent.chatContainer)
    }
    this.msjService.addMessage(recomendation).subscribe(() => {
      if (this.childComponent) {
        this.msjService.scrollToBottom(this.childComponent.chatContainer)
      }
    })
  }
}
