import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { InputType } from 'src/app/models/enums/input-type.enum';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() type: InputType;
  @Input() placeholder: string;
  @Input() label: string;
  @Input() control: FormControl;

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  get errorMessage(): string{
    const mainTranslateKey: string = 'ERROR_MESSAGE';

    switch(true) {
      case this.control.hasError('required'):
        return this.translate.instant(`${mainTranslateKey}.REQUIRED`);
      case this.control.hasError('wrongPassword'):
        return this.translate.instant(`${mainTranslateKey}.WRONG_PASSWORD`);
      default:
        return '';
    }
  }

}
