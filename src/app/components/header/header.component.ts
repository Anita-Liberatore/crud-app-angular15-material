import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddEditComponent } from '../dialog/dialog-add-edit.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class HeaderComponent {
  @Input() headerTitle!: string;
  @Input() buttonAction!: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(DialogAddEditComponent, {
      width: '500px'
    });
  }
}
