const fs = require('fs')
const { PDFDocument } = require('pdf-lib')

async function main() {

  const existingPdfBytes = fs.readFileSync(`test_repaired.pdf`);

  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  const pdfBytes = await pdfDoc.save({ useObjectStreams: true });
  fs.writeFileSync(`test_repaired_out.pdf`, pdfBytes);

}

main()