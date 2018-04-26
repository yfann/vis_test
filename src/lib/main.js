var data =[
  {id: 1, content: 'item 1', start: '2013-04-20'},
  {id: 2, content: 'item 2', start: '2013-04-14'},
  {id: 3, content: 'item 3', start: '2013-04-18'},
  {id: 4, content: 'item 4', start: '2013-04-16', end: '2013-04-19'},
  {id: 5, content: 'item 5', start: '2013-04-25'},
  {id: 6, content: 'item 6', start: '2013-04-27'}
];



var itemData =[
  {id: 1, group:'1', content: 'item 1', start: '2013-04-20'},
  {id: 2, group:'1', content: 'item 2', start: '2013-04-14'},
  {id: 3, group:'2', content: 'item 3', start: '2013-04-18'},
  {id: 4, group:'2', content: 'item 4', start: '2013-04-16', end: '2013-04-19'},
  {id: 5, group:'3', content: 'item 5', start: '2013-04-25'},
  {id: 6, group:'3', content: 'item 6', start: '2013-04-27'}
];


var group=[
  {
    id:1,
    content:'a'
  },
  {
    id:2,
    content:'b'
  },
  {
    id:3,
    content:'c'
  }
]
  
  // DOM element where the Timeline will be attached
  var container = document.getElementById('visualization');

  // Create a DataSet (allows two way data-binding)
  var items = new vis.DataSet(itemData);

  // Configuration for the Timeline
  var options = {
    selectable:true,
    editable:true
  };

  // Create a Timeline
  var timeline = new vis.Timeline(container, items,group, options);


  timeline.on('select', function (properties) {
    console.log('selected items: ' + properties.items);
  });
