document.getElementById('saveButton').addEventListener('click', function() {
    var inputText = document.getElementById('inputText').value;
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML += '<p>' + inputText + ' <button class="likeButton" onclick="increaseLikes(this)">좋아요</button> <span class="likesCount">0</span></p>';
    document.getElementById('inputText').value = ''; 
});

function increaseLikes(button) {
    var likesCountSpan = button.nextElementSibling;
    var likesCount = parseInt(likesCountSpan.innerText);
    likesCount++;
    likesCountSpan.innerText = likesCount;
}
