
let stringC = "string1"

const formDataImg = new FormData();
const formDataPdf = new FormData();

imgLocal = new Image()
imgLocal.src = "img/trac.jpg"
//console.log(imgLocal.src)

pdfLocal = new Image()
pdfLocal.src = "pdf/truc.pdf"

baseUrl = "https://ascii-art.fr/"
async function pdfToServeur(stringC) {

    let urlImg = `${baseUrl}uploadimage/${stringC}` // randomString
    let urlPdf = `${baseUrl}uploadpdf/` //id

    formDataImg.append('asciicapture',imgLocal.files[0], imgLocal.src) // value = bloblo.jpg  /!\ taille /!\
    formDataImg.append('asciicapture',new Blob(imgLocal, {image/png}), imgLocal.src) // value = bloblo.jpg  /!\ taille /!\

    let fetchParamsImg = {
        method: 'POST',
        redirect : 'follow',
        body : formDataImg
    }

    await fetch(urlImg, fetchParamsImg)
        .then(response=>response.json())
        .then(result=>{
            console.log(result)


            // 2° fetch pour pdf
            formDataPdf.append('pdf', pdfLocal) // value = truc.pdf
            urlPdf +=result.id
            let fetchParamsPdf = {
                method: 'POST',
                body: formDataPdf
            }
            fetch(urlPdf, fetchParamsPdf)
                .then(response=>response.json())
                .then(result=>{
                    console.log('test')
                })
        })
}

