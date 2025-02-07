import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogSlideComponent } from '../dialog-slide/dialog-slide.component';

@Component({
  selector: 'app-dialog-view',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './dialog-view.component.html',
  styleUrl: './dialog-view.component.scss'
})
export class DialogViewComponent {


  constructor(public dialog: MatDialog) {

  }
  togglePopup() {
    const dialogRef = this.dialog.open(DialogSlideComponent, {
      width: '480px ',
      data: { name: 'Ash', animal: 'animal' },
      enterAnimationDuration: 1000
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
