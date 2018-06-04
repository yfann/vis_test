// var data =[
//   {id: 1, group:1, content: 'item 1', start: '2013-04-09', type : 'point'},
//   {id: 2, group:2,content: 'item 2', start: '2013-04-10', type : 'point'},
//   {id: 3, group:3,content: 'item 3', start: '2013-04-13', type : 'point'},
//   {id: 4, group:4,content: 'item 4', start: '2013-04-15', type : 'point'},
//   {id: 5, group:5,content: 'item 5', start: '2013-04-17', type : 'point'},
//   {id: 6, group:6,content: 'item 6', start: '2013-04-20', type : 'point'},
//   {id: 7, group:7,content: 'item 7', start: '2013-04-21', type : 'point'}
// ];


var data = [
  { id: 1, group: 1, content: 'item 1', start: '2013-04-09 09:20:42', type: 'box' },
  { id: 2, group: 2, content: 'item 2', start: '2013-04-09 10:30:42', type: 'box' },
  { id: 3, group: 3, content: 'item 3', start: '2013-04-09 11:11:42', type: 'box' },
  { id: 4, group: 4, content: 'item 4', start: '1900-01-01', type: 'box' },
  { id: 5, group: 5, content: 'item 5', start: '2013-04-09 13:11:42', type: 'box' },
  { id: 6, group: 6, content: 'item 6', start: '2013-04-09 14:11:42', type: 'box' },
  { id: 7, group: 7, content: 'item 7', start: '2013-04-09 15:11:42', type: 'box' }
];


var group = [
  {
    id: 1,
    content: 'a'
  },
  {
    id: 2,
    content: 'b'
  },
  {
    id: 3,
    content: 'c'
  },
  {
    id: 4,
    content: 'd',
    className: 'missing-group'
  },
  {
    id: 5,
    content: 'e'
  },
  {
    id: 6,
    content: 'f'
  },
  {
    id: 7,
    content: 'g'
  }
]

// DOM element where the Timeline will be attached
var container = document.getElementById('visualization');

// Create a DataSet (allows two way data-binding)
var items = new vis.DataSet(data);


var startTime = new Date('2013-04-09 00:00:00');
var endTime = new Date('2013-04-09 23:59:59');

// Configuration for the Timeline
var options = {
  selectable: true,
  editable: false,
  orientation: {
    axis: "top",
    item: "top"
  },
  timeAxis: {
    scale: 'minute',
    step: 60
  },
  margin: {
    axis: 0,
    item: {
      horizontal: 10,
      vertical: 10
    }
  },
  template: function (item, element, data) {
    var html = '<div class="img-icon"></div>';
    return html;
  },
  moveable: false,
  start: startTime,
  end: endTime,
  format: {
    minorLabels: function (date, scale, step) {
      var timespan = 0;
      if (date) {
        var d = new Date(date);
        timespan = d.getTime() - startTime.getTime();
      }
      switch (scale) {
        case 'hour':
          return timespan/(1000*60*60);
        case 'minute':
          return timespan/(1000*60);
        default:
          return '';
      }
    }
  }
};

// Create a Timeline
var timeline = new vis.Timeline(container, items, group, options);

