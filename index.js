const fs = require('fs')
const { PDFDocument } = require('pdf-lib')
const fontkit = require('@pdf-lib/fontkit')

async function main() {
  for (let i = 1; i < 13; i++) {
    const existingPdfBytes = fs.readFileSync(`extractedPDF/test-${i}.pdf`);

    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    const pdfBytes = await pdfDoc.save({ useObjectStreams: true });
    fs.writeFileSync(`extractedPDF/test-${i}-out.pdf`, pdfBytes);
  }
}

main()