function insertAlerts(parent) {
  for (let i = 0; i < 3; i++) {
    parent.appendChild(_ui.make(alert));
  }
}

function revertToPrimary(event) {
  _ui.state(event.target, 'primary');
}

function copyPaste(event) {
  let cdn = _ui.get({id: 'cdn'});
  navigator.clipboard.writeText(cdn.value).then(function() {
    event.target.innerText = 'Copied!'
  });
}

_ui.loaded(() => {
  insertAlerts(_ui.get({id: 'demo'}));

  let alerts = _ui.get({class: 'alert'});

  _ui.mouseenter(alerts[0], () => _ui.state(alerts[0], 'danger'));
  _ui.mouseenter(alerts[1], () => _ui.state(alerts[1], 'info'));
  _ui.mouseenter(alerts[2], () => _ui.state(alerts[2], 'success'));

  _ui.click(revertToPrimary, {query: '.alert'});

  _ui.click({id: 'copyCdn'}, copyPaste);
});