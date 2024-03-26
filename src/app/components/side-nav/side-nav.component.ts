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
    this.msjService.initChat()
    if (this.ChatComponent) {
      this.msjService.scrollToBottom(this.ChatComponent.chatContainer)
    }
    console.log(question);
    this.msjService.addMessage(question).subscribe(() => {
      // console.log(this.childComponent.chatContainer);
      if (this.ChatComponent) {
        this.msjService.scrollToBottom(this.ChatComponent.chatContainer)
      }
    })


  }
}
