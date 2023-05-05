$(document).ready(function() {

  var noteCount = 0;

  function createNote() {
    noteCount++;
    var noteId = "note" + noteCount;
    var noteHtml = '<div id="' + noteId + '" class="note">' +
                     '<div class="handle">Poignée</div>' +
                     '<textarea></textarea>' +
                     '<button class="delete-note-btn">Supprimer</button>' +
                   '</div>';
    $("#notes-container").append(noteHtml);
    $("#" + noteId).draggable({ handle: ".handle" });
    $("#" + noteId + " .delete-note-btn").click(function() {
      var confirmDelete = confirm("Êtes-vous sûr de vouloir supprimer cette note ?");
      if (confirmDelete) {
        $("#" + noteId).remove();
      }
    });
    $("#" + noteId + " textarea").on("input", function() {
      autoResizeTextarea(this);
    });
  }

  $("#create-note-btn").click(function() {
    createNote();
  });

});
