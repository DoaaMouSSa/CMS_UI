import http from "../http-common";

class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();
    formData.append("ContentType", 3);
    formData.append("Heading", 'first test');
    formData.append("Text", 'first test');
    formData.append("File", file);
    for (var pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
  }
    return http.post("/Content/ChangeContent", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress
    });
  }


}

export default new UploadFilesService();