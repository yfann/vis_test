var container = document.getElementById('visualization');
var items = new vis.DataSet();
var customDate = new Date();
var options = {
  showCurrentTime: true,
  start: new Date(Date.now() - 1000 * 60 * 60 * 24),
  end: new Date(Date.now() + 1000 * 60 * 60 * 24 * 6)
};
var timeline = new vis.Timeline(container, items, options);

// Set first time bar
customDate = new Date(customDate.getFullYear(), customDate.getMonth(), customDate.getDate() + 1);
timeline.addCustomTime(customDate, 't1');

document.getElementById('add').onclick = function () {
  try {
    customDate = new Date(customDate.getFullYear(), customDate.getMonth(), customDate.getDate() + 1);
    var barId = document.getElementById('barId').value || undefined;
    timeline.addCustomTime(customDate, barId);
    document.getElementById('barId').value = '';
  }
  catch (err) {
    console.log(err);
    alert(err);
  }
};

document.getElementById('remove').onclick = function () {
  try {
    timeline.removeCustomTime(document.getElementById('barIndex').value);
    document.getElementById('barIndex').value = '';
  }
  catch (err) {
    console.log(err);
    alert(err);
  }
};

timeline.on('timechange', function (properties) {
  document.getElementById('timechangeBar').innerHTML = properties.id;
  document.getElementById('timechangeEvent').innerHTML = properties.time;
});
timeline.on('timechanged', function (properties) {
  document.getElementById('timechangedBar').innerHTML = properties.id;
  document.getElementById('timechangedEvent').innerHTML = properties.time;
});