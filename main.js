/*
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

    // value = bloblo.jpg  /!\ taille /!\
    //formDataImg.append('asciicapture',imgLocal.files[0], imgLocal.src)chat
    //formDataImg.append('asciicapture', , imgLocal.src) // value = bloblo.jpg  /!\ taille /!\

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

 */







baseUrl = "https://ascii-art.fr/"
const formDataImg = new FormData();
const formDataPdf = new FormData();

const btnStart = document.querySelector('.btnStart')
btnStart.addEventListener('click', ()=>{
    const fileInput = document.querySelector(".input")
    const fileImg = fileInput.files[0];
    const inputPdf = document.querySelector(".inputPdf")
    const filePdf = inputPdf.files[0];
    getImage(fileImg, filePdf);
})

async function getImage(fileImg, filePdf) {
    // Assume the fileImg is stored in the variable `fileImg`
    let urlImg = `${baseUrl}uploadimage/stringRandomA1` // randomString
    let urlPdf = `${baseUrl}uploadpdf/` //id
    formDataImg.append("asciicapture", fileImg);

    console.log('test')
    console.log(fileImg)

    let fetchParamsImg = {
        method: 'POST',
        redirect : 'follow',
        body : formDataImg
    }

    await fetch(urlImg, fetchParamsImg)
        .then(response => response.json())
        .then(data => {
            // 2 fetch
            formDataPdf.append('pdf', filePdf) // value = truc.pdf
            urlPdf +=data.id
            let fetchParamsPdf = {
                method: 'POST',
                redirect : 'follow',
                body: formDataPdf
            }
            fetch(urlPdf, fetchParamsPdf)
                .then(response=>response.json())
                .then(result=>{
                    console.log('test')
                })
        })
        .catch(error => {
            console.error(error);
        });
}







