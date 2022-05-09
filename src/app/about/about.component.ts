import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  info =
  {
    nom : 'Mohammed',
    email: 'masterivanic',
    tel: '0661326837'
  }
  comment:Comment = { id:0, message:''}
  newComment = false
  comments =  new Array()

  constructor() { }

  ngOnInit(): void {
  }

  addComment(): void {
      if(this.comment.message != ''){
          this.comment.id = this.comments.length + 1
          this.comments.push({
            id:this.comment.id,
            message: this.comment.message
          })
      }
  }
}

interface Comment {
  id: number,
  message: string
}
