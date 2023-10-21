image_array = [
    '222paranormal.png',
    'catchUsInside.png',
    'codeNewbie.png',
    'dadWroteA.png',
    'dateline.png',
    'deepDive.png',
    'doac.png',
    'howToBe60.png',
    'howToFail.png',
    'hubermanLab.png',
    'learnToCode.png',
    'myTherapist.png',
    'namaste.png',
    'olderWider.png',
    'paranormalActivity.png',
    'realHauntings.png',
    'scrimba.png',
    'urzilaCarlson.png',
    'webCrawlers.png',
    'whatsYourProblem.png'
]

function get_random_image(){
    //get random index

    random_index = Math.floor(Math.random() * image_array.length);

//get an image at the random_index

selected_image = image_array[random_index]

//display the image

document.getElementById('image_shower').src = `./img/${selected_image}`

}