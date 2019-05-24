$(document).ready(function() {
  $("#submit").on('click', function(e) {
    e.preventDefault();
    var text = $('#task_title').val()

    $.ajax({
      type: 'POST',
      url: 'tasks',
      data: {
        task: {
          title: text,
        }
      },
      dataType: 'json'
    }).done(function(data){
      $('#task-list').append(
        `<tr>
           <td>
             ${data.title}
           </td>
         </tr>
        `
      )
    })

    $('#task_title').val('')
  })
})
