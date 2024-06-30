frequency_form.addEventListener('submit', async (event) => {
    event.preventDefault()
    // const form_data = {
    //     name: name.value,
    //     directorate: directorate.value,
    //     role: role.value,
    //     local: local.value,
    //     shift: shift.value,
    //     period: period.value
    // }
    // console.log(form_data)
    // document.getElementById('main-impress_container').style.display = 'flex'
    // document.getElementById('impress_wrapper').style.display = 'block'
    // let element = document.getElementById('main-impress_container');
    // await html2pdf(element);
    // document.getElementById('main-impress_container').style.display = 'none'
    // document.getElementById('impress_wrapper').style.display = 'none'

    // document.getElementById('main-impress_container').style.display = 'flex'
    // document.getElementById('impress_wrapper').style.display = 'block'
    // var element = document.getElementById('main-impress_container');
    // var opt = {
    //     margin: 0,
    //     filename: 'myfile.pdf',
    //     image: { type: 'jpeg', quality: 1 },
    //     html2canvas: { scale: 2, dpi: 600, letterRendering: true,  },
    //     jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait', compressPDF: true }
    // };
    // await html2pdf().set(opt).from(element).save();
    // document.getElementById('main-impress_container').style.display = 'none'
    // document.getElementById('impress_wrapper').style.display = 'none'

    window.print()
})