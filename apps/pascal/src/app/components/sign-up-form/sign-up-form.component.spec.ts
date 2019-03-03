import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpFormComponent } from './sign-up-form.component';
import { TESTING_IMPORTS, TESTING_PROVIDERS } from '../../utils/testing';

describe('SignUpFormComponent', () => {
  let component: SignUpFormComponent;
  let fixture: ComponentFixture<SignUpFormComponent>;
  let html: HTMLDocument;
  let submitBtn: HTMLButtonElement;
  let nameInput: HTMLInputElement;
  let emailInput: HTMLInputElement;
  let passwordInput: HTMLInputElement;
  let passwordConfirmationInput: HTMLInputElement;
  const newAccount = {
    name: 'Tony Stark',
    email: 'tony@stark.com',
    password: 'tony.123',
    password_confirmation: 'tony.123',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ...TESTING_IMPORTS,
      ],
      declarations: [SignUpFormComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [...TESTING_PROVIDERS],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpFormComponent);
    component = fixture.componentInstance;

    html = fixture.nativeElement;
    submitBtn = html.querySelector('form button[type=submit]');
    nameInput = html.querySelector('form input[formControlName="name"]');
    emailInput = html.querySelector('form input[formControlName="email"]');
    passwordInput = html.querySelector('form input[formControlName="password"]');
    passwordConfirmationInput = html.querySelector('form input[formControlName="password_confirmation"]');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have certain form elements', () => {
    expect(name).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(passwordConfirmationInput).toBeTruthy();
    expect(submitBtn).toBeTruthy();
  });

  it('should have invalid form on initial state', () => {
    expect(component.form.valid).toBe(false);
  });

  it('should have submit btn disabled on initial state', () => {
    expect(component.status).toBeFalsy();
    expect(submitBtn.disabled).toBe(true);
  });

  it('should have submit btn disabled if form status equals to signingIn', () => {
    component.status = 'signingIn';
    component.form.patchValue(newAccount);

    fixture.detectChanges();

    expect(submitBtn.disabled).toBe(true);
  });

  it('should have submit btn enabled if form is valid', () => {
    component.form.patchValue(newAccount);

    fixture.detectChanges();

    expect(component.form.valid).toBe(true);
    expect(submitBtn.disabled).toBe(false);
  });

  it('should emit event when form is submitted', () => {
    spyOn(component.submitted, 'emit').and.callThrough();

    component.form.patchValue(newAccount);
    fixture.detectChanges();

    submitBtn.click();
    fixture.detectChanges();

    expect(component.submitted.emit).toHaveBeenCalledWith(newAccount);
  });

  it('should use llstarscreamll-api-errors component in template', () => {
    component.errors = {
      message: 'Unprocessable entity',
      ok: false,
      error: { message: 'Wrong data!!', errors: { email: ['email is invalid'] } }
    };

    fixture.detectChanges();

    const template: HTMLDocument = fixture.nativeElement;
    const errorsComponent = template.querySelector('llstarscreamll-api-errors');

    expect(errorsComponent).toBeTruthy();
  });
});