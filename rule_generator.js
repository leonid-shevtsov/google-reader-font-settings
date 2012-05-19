window.makeGoogleReaderStyle = function(options) {
  var font_family = options.fontFamily == 'custom' ? options.fontFamilyCustom : options.fontFamily;
  var rulesText = '.card-content { ';

  if (options.pageWidth != 1600) {
    rulesText += 'width: ' + options.pageWidth + 'px !important; ';
  }

  if (font_family != 'default') {
    rulesText += 'font-family: ' + font_family + ' !important;';
  }

  rulesText += 'font-size: ' + options.fontSize.toFixed() + 'px !important;';
  rulesText += 'line-height: ' + options.lineHeight.toFixed(1) + 'em !important;';
  rulesText += 'margin: ' + options.lineHeight.toFixed(1) + 'em auto !important;';

  rulesText += '}';
  
  rulesText += '.card-content p { text-align: ' + options.textAlign + ' !important; }';
  
  return rulesText;
}
