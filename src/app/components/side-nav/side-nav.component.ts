import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { sections, Section } from '../../utils/sections.data'
import { CommonModule } from '@angular/common';
import { ChatService } from '../../services/chat.service';
import { ChatMessagesComponent } from '../chat/widgets/chat-messages/chat-messages.component';
import { userData } from '../../utils/constants';
@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule, ChatMessagesComponent],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {

  @Input() ChatComponent!: ChatMessagesComponent;

  public sections = sections
  public userData = userData

  constructor(
    private msjService: ChatService,
  ) { }


  openQuestion(question: string) {
    if (!this.msjService.timerState) {
      this.msjService.timerState = true
      this.msjService.initChat()
      if (this.ChatComponent) {
        this.msjService.scrollToBottom(this.ChatComponent.chatContainer)
      }
      this.msjService.addMessage(question).subscribe(() => {
        if (this.ChatComponent) {
          this.msjService.scrollToBottom(this.ChatComponent.chatContainer)
        }
      })
      setTimeout(() => {
        this.msjService.timerState = false
      }, 60000);
    }
  }
}
