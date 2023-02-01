
let stringCarac = "bloblo"

const formDataImg = new FormData();
const formDataPdf = new FormData();

imgLocal = new Image()
imgLocal.src = "img/trac.jpg"
console.log(imgLocal)

pdfLocal = new Image()
pdfLocal.src = "pdf/truc.pdf"

baseUrl = "http:192.168.8.107:8000/"
async function pdfToServeur(stringCarac) {

    let urlImg = `${baseUrl}uploadimage/${stringCarac}` // randomString
    let urlPdf = `${baseUrl}uploadpdf/` //id

    formDataImg.append('asciicapture', imgLocal) // value = bloblo.jpg !taille
    //formData.append('value', myFileInput.files[0], 'trac.jpg')

    let fetchParamsImg = {
        method: 'POST',
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

