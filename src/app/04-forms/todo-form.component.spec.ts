import { TodoFormComponent } from './todo-form.component';
import { FormBuilder } from '@angular/forms';

describe('TodoFormComponent Ja', () => {
  var component: TodoFormComponent;

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  });

  it('should create a form with 2 control', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('email')).toBe(true); //can use toBe() or toBeTruthy
  });

  it('should make the name control required', () => {
    let name = component.form.get('name');
    name.setValue('');
    expect(name.valid).toBeFalsy();
  });
});
