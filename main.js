$(document).ready(function() {

  var base = "<div class='lecture-entry {DAY} rel-start-{START_TIME}'><div style='background-color: {COLOR}' class='lecture-entry-header semibold'>{TIME}</div><div class='lecture-entry-body block-{LENGTH}'>{NAME}<br />{LOC}</div><div class='lecture-entry-footer'></div></div>"

  function composeHTML(info) {
    name = info["name"];
    time = info["time"];
    day = info["day"];
    start = info["start"];
    end = info["end"];
    loc = info["loc"];
    color = info["color"];

    var length = String(parseInt(end) - parseInt(start));

    // You can chain together the calls if you want!
    result = base.replace("{DAY}", day).replace("{START_TIME}", start);
    result = result.replace("{LENGTH}", length).replace("{LOC}", loc);
    result = result.replace("{TIME}", time).replace("{NAME}", name);
    result = result.replace("{COLOR}", color);

    return result;
  }

  var classes = schedule.map(composeHTML);

  console.log(classes);

  classes.forEach(function(item) {
    $(item).insertAfter(".anchor");
  });
});
