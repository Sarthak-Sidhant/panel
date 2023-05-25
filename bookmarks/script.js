// Function to add a bookmark to the list
function addBookmark(name, url) {
    // Create a new li element and append it to the ul
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.textContent = name;
    a.href = url;
    li.appendChild(a);
    
    // Create a delete button and append it to the li
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function() {
        li.parentNode.removeChild(li);
    });
    li.appendChild(deleteBtn);
    
    // Append the li to the ul
    document.getElementById("bookmark-list").appendChild(li);
}

// Function to handle the form submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Get the values from the form
    var name = document.getElementById("bookmark-name").value;
    var url = document.getElementById("bookmark-url").value;
    
    // Add the bookmark to the list
    addBookmark(name, url);
    
    // Reset the form
    document.getElementById("bookmark-form").reset();
}

// Function to handle file upload
function handleFileUpload(event) {
    var fileList = event.target.files;
    
    // Loop through the files and add them to the list
    for (var i = 0; i < fileList.length; i++) {
        var file = fileList[i];
        addBookmark(file.name, URL.createObjectURL(file));
    }
    
    // Reset the form
    document.getElementById("file-upload-form").reset();
}

// Attach event listeners to the forms
document.getElementById("bookmark-form").addEventListener("submit", handleFormSubmit);
document.getElementById("file-upload").addEventListener("change", handleFileUpload);

// Function to generate the embed code for a YouTube video
function generateEmbedCode(url) {
    var videoId = url.split("v=")[1];
    return '<div class="embed-container"><iframe src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe></div>';
}

// Function to handle adding a YouTube video
function handleYouTubeSubmit(event) {
    event.preventDefault();
    
    // Get the YouTube URL from the form
    var url = document.getElementById("youtube-url").value;
    
    // Generate the embed code and add it to the list
    addBookmark("YouTube Video", generateEmbedCode(url));
    
    // Reset the form
    document.getElementById("youtube-form").reset();
}

// Attach event listener to the YouTube form
document.getElementById("youtube-form").addEventListener("submit", handleYouTubeSubmit);