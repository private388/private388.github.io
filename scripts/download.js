function download() {
  const link = document.querySelector("input[name='link']").value;
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/download");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send("link=" + link);
  xhr.onload = () => {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      const filename = data.filename;
      const url = data.url;
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
    } else {
      alert("Something went wrong!");
    }
  };
}

document.querySelector("input[type='submit']").addEventListener("click", download);
