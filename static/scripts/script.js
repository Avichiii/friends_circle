const homeButtonElement = document.querySelector('.js-home-button')
homeButtonElement.addEventListener('click', () => {
    document.body.innerHTML = '';
    generateFriendsInformation();
});


function generateFriendsInformation() {
    try {
        let generateHtmlPage = '';
        const names = [
            'alu priya',
            'sakil',
            'I do drugs',
            'Love Master Ayan',
            'sakt launda Amt',
            'panu-khor suvo',
            'Nice guy Avi',
            'Nunu'
        ];

        names.forEach((name, index) => {
            generateHtmlPage += `<div class="box">
            <div>
                <img class="profile-picture"  src="../static/images/pro${index + 1}.jpg" alt="${name}">
            </div>
            <div>
                <p class="profile-paragraph">${name}</p>
            </div>
            <div>
                <button class="profile-button js-profile-button" onclick="fetchInfo(${index});">Click Me</button>
            </div>
        </div>`
        });
        
        document.body.innerHTML = generateHtmlPage;

    } catch (error) {
        console.error(error);
    }
}


function fetchInfo(number) {
    try {
        let generateInfo = ''
        const infoList = [
            'I am the most beautiful women in the world, and everybody knows that',
            'I hack stuff',
            'I want to talk about girls with my friends, but I\'m too shy to do that.',
            'Me!! I\'m Gamer God, my favorite games are Master Piece & jonie since',
            'sakt launda all the time.',
            'porn, hentai & hand, aur kya chahi e!!!',
            'Me!!! I\'m the most popular guy in our group every one loves me',
            'I masturbate 5 time a day.'
        ];

        infoList.forEach((info, index) => {
            if(index === number) {
                generateInfo = `<div class="grid">
                <div>
                    <p class="grid-para">${info}</p>
                </div>
                <div>
                    <img class="grid-img" src="../static/images/pro${index+1}${index+1}.jpg" alt="">
                </div>
             </div>`
            }
        });

        document.body.innerHTML = generateInfo;

    } catch (error) {
        console.error(error);
    }
}