let alert = {
  tag: 'div',
  classes: ['alert', 'alert-primary'],
  attr: {
    role: 'alert',
    innerText: 'Hover over me! Then click me!',
    blueprint: 'alert',
  },
  states: {
    primary: ['alert-primary'],
    danger: ['alert-danger'],
    success: ['alert-success'],
    info: ['alert-info'],
  },
}