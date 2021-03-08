function insertAlerts(parent) {
  for (let i = 0; i < 3; i++) {
    parent.appendChild(_ui.make(alert));
  }
}

_ui.loaded(() => {
  insertAlerts(_ui.get({id: 'demo'}));

  let alerts = _ui.get({class: 'alert'});

  alerts.forEach((alert, idx) => {
    switch (idx) {
      case 0:
        _ui.mouseenter(alert, () => _ui.state(alert, 'danger'));
        break;
      case 1:
        _ui.mouseenter(alert, () => _ui.state(alert, 'info'));
        break;
      case 2:
        _ui.mouseenter(alert, () => _ui.state(alert, 'success'));
        break;
    }

    _ui.mouseleave(alert, () => _ui.state(alert, 'primary'));
  });
});