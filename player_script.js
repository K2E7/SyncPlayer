const selectDiv = document.getElementById("side");
const videoPlayer = document.getElementById("player");

// Add event listener to the div element
selectDiv.addEventListener("click", function () {
    // Create an input element of type "file"
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "video/mp4";

    // Trigger the file explorer dialog when the input element changes
    fileInput.addEventListener("change", function (event) {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);

        // Update the source of the video player
        videoPlayer.src = url;
    });

    // Simulate a click on the file input element
    fileInput.click();
});
