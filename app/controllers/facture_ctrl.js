var remote = require('remote')
var fs = require('fs')

var webContents = remote.getCurrentWebContents()

var saveToPDF = function (factureCode) {
  var pdfPrintOptions = {
    pageSize: 'A4',
    marginsType: 0,
    printBackground: true,
    printSelectionOnly: false,
    landscape: false
  }

  webContents.printToPDF(pdfPrintOptions, function (error, data) {
    if (error) throw error
    fs.writeFile(remote.app.getAppPath() + '/facture.pdf', data, function (error) {
      if (error) {
        throw error
      }
      console.log('Write PDF successfully.')
    })
  })
}

webContents.on('dom-ready', function () {
  var factureCode = document.getElementById('js-facture')
  // buttonSaveToPDF.addEventListener('click', saveToPDF(factureCode))
  saveToPDF(factureCode)
})
