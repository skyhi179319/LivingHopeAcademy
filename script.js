var events = new Vue({
  el: '#events',
  data: {
    event: [
      /* 
        adding a new event: { message : 'event description'}
        add a comma after each event except if there is only one
      */
      { message: 'No events right now' }
    ]
  }
})
var jobs = new Vue({
  el: '#jobs',
  data: {
    event: [
      /* 
        adding a new job: { message : 'job','facebook url'}
        add a comma after each event except if there is only one
      */
      {message: 'For more infromation click here', url: 'https://www.facebook.com/livinghopeacademy/'}
    ],
  }
})
var updates = new Vue({
  el: '#updates',
  data: {
    event: [
      /* 
        adding a new update: { message : 'update description'}
        add a comma after each event except if there is only one
      */
      { message: 'No updates right now'}
    ]
  }
})