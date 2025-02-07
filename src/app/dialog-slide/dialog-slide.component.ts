import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { animate, AnimationOptions, state, style, transition, trigger} from '@angular/animations';

export interface ReusableAnimationOptions<State> extends AnimationOptions {
  value?: State;
}

@Component({
  selector: 'app-dialog-slide',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './dialog-slide.component.html',
  styleUrl: './dialog-slide.component.scss',
  animations: [
    trigger('slide', [
      state('show', style({ transform: 'translateX(0)' })),
      state('hide', style({ transform: 'translateX(-460px)' })),
      transition('* => *', animate(1000))
    ]),
    trigger('slide2', [
      state('show', style({ transform: 'translateX(-460px)' })),
      state('hide', style({ transform: 'translateX(0)' })),
      transition('* => *', animate(1000))
    ])
  ]
})
export class DialogSlideComponent {

  visible = false;
  step1 = 'show';
  step2 = 'hide';

  constructor(
    public dialogRef: MatDialogRef<DialogSlideComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  togglePopup() {
    this.visible = !this.visible;

    if (this.visible) {
      this.step1 = 'hide';
      this.step2 = 'show';
    } else {
      this.step1 = 'show';
      this.step2 = 'hide';
    }
  }


}
