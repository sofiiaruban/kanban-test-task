export enum ButtonType {
  Submit = 'submit',
  Button = 'button',
  Reset = 'reset'
}

export enum InputType {
  URL = 'url',
  Text = 'text',
  Email = 'email',
  Password = 'password'
}

export interface FormValues {
  githubRepo: string
}
