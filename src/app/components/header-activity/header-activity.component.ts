import { Component, Input } from '@angular/core';
import { HeaderActivity } from '../../shared/base/activity.types';

@Component({
  selector: 'app-header-activity',
  imports: [],
  templateUrl: './header-activity.component.html',
  styleUrl: './header-activity.component.css'
})
export class HeaderActivityComponent {
  @Input() headerContent!: HeaderActivity;
  @Input() passingScore!: number;
  @Input() totalScore!: number;
}
