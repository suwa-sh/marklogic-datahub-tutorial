function katakanaToHiragana(text){
  text = '' + text
  return text.replace(/[u30a1-u30f6]/g, function(match) {
    var chr = match.charCodeAt(0) - 0x60;
    return String.fromCharCode(chr);
  });
}

function tutorialParseDate(val) {
  val = '' + val;
  let dateArgs = val.split(/-|\//);
  let year = dateArgs[0];
  let month = dateArgs[1].length == 1 ? "0" + dateArgs[1] : dateArgs[1];
  let day = dateArgs[2].length == 1 ? "0" + dateArgs[2] : dateArgs[2];
  return year + "-" + month + "-" + day;
}

module.exports = {
  katakanaToHiragana,tutorialParseDate
}
