// task 1

function sendVote() {
    const ajaxRequest = new XMLHttpRequest();

    ajaxRequest.open('GET','/homework-12/vote', true)
    const buttonText = document.getElementById('voteButton');

    ajaxRequest.onreadystatechange = function () {
        if (ajaxRequest.readyState == 4 && ajaxRequest.status == 200) {
            buttonText.innerHTML = "You vote is accepted: " + ajaxRequest.responseText
        }
    }
    ajaxRequest.send()
}


// task 2

function downloadBooks() {
    const ajaxRequest = new XMLHttpRequest();
    ajaxRequest.open('GET', 'books.json', true);

    ajaxRequest.onreadystatechange = function () {
        if (ajaxRequest.readyState != 4) {
            return;
        }
        if (ajaxRequest.status != 200) {
            alert('Error ' + ajaxRequest.status + ': ' + ajaxRequest.statusText);
        } else {
            let response = JSON.parse(ajaxRequest.responseText);

            let ul = document.getElementById('booksAuthors');
            ul.innerHTML = '';

            for (let i = 0; i < response.length; i++) {

                let li = document.createElement('li');
                li.innerHTML = response[i].author;
                ul.appendChild(li)


            }
        }
    }
    ajaxRequest.send();
}


