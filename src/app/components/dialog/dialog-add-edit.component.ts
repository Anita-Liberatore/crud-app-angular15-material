import { Component } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-dialog-add-edit',
  templateUrl: './dialog-add-edit.component.html',
  styleUrls: ['./dialog-add-edit.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})
export class DialogAddEditComponent {

 
}
