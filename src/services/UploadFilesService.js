import http from "../http-common";

class UploadFilesService {
  upload(file,heading,text) {
    let formData = new FormData();
    formData.append("ContentType", 3);
    formData.append("Heading", heading);
    formData.append("Text", text);
    formData.append("File", file);
  
    return http.post("/Content/ChangeContent", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
    });
  }


}

export default new UploadFilesService();