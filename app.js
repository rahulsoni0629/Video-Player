const videoPlayer = document.getElementById('videoPlayer');
  const dropArea = document.getElementById('dropArea');
  const fileInput = document.getElementById('fileInput');

  dropArea.addEventListener('drop', handleDrop);
  dropArea.addEventListener('dragover', allowDrop);

  function allowDrop(event) {
    event.preventDefault();
  }

  function handleDrop(event) {
    event.preventDefault();
    handleFiles(event.dataTransfer.files);
  }

  function openFileInput() {
    fileInput.click();
  }

  function handleFileInput(input) {
    handleFiles(input.files);
  }

  function handleFiles(files) {
    if (files.length > 0) {
      const videoFile = files[0];

      if (videoFile.type.startsWith('video/')) {
        const videoURL = URL.createObjectURL(videoFile);
        videoPlayer.src = videoURL;
        videoPlayer.play();
        dropArea.innerHTML = `<p>Playing: ${videoFile.name}</p>`;
      } else {
        dropArea.innerHTML = `<p>Invalid file type. Please select a video file.</p>`;
      }
    }
  }