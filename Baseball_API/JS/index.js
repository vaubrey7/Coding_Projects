var nameElem = $('#name');
var positionElem = $('#position');
var pobElem = $('#pob');
var searchName = 'cespedes';
var inputElement = $("#playername");
var errorElement = $("#error");
$("form").on("submit", function(event) {
    event.preventDefault();
    search(inputElement.val());
});

function search(playerName) {
  var url = `http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='${playerName}%25'`;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        errorElement.empty();
      var row = data.search_player_all.queryResults.row;
      if(row.length) {
        row = row[0];
      }
      console.log(row);
      nameElem.text(row.name_display_first_last);
      positionElem.text(row.team_full + " - " +  row.position);
      var place = row.birth_city + ', ' + row.birth_country;
      pobElem.text(place);
      pobElem.attr(
        'href',
        'https://www.google.com/maps/search/?api=1&query=' + place
      );
      // todo update the DOM
    }).catch(function(err) {
        errorElement.text("NOT FOUND");
        console.log("There's an error")

    });
}
search(searchName);