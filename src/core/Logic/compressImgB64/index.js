const compressImgB64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        var image = new Image();
  
        image.src = fileReader.result;
        image.onload = async function () {
          const MAX_WIDTH = 1280;
          const MAX_HEIGHT = 1280;
          const MAX_SIZE = 70000;
          let width = image.width;
          let height = image.height;
  
          var start = 0;
          var end = 1;
          var last, accepted, blob;
  
          //buat nentuin max widh atau max height
          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }
  
          const canvas = document.createElement("canvas");
  
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          accepted = blob = await new Promise((rs) =>
            canvas.toBlob(rs, "image/jpeg", 1)
          );
  
          if (blob.size < MAX_SIZE) {
            console.log("Ga usah compress");
  
            accepted = blob;
  
            // return accepted;
          } else {
            console.log(`Image size setelah scaling ${blob.size} bytes`);
          }
  
          // Binary compress, lupa sumber. intinya selama belum mencapai batas maksimal ukuran, akan di kompres ulang.
          while (true) {
            const mid = Math.round(((start + end) / 2) * 100) / 100;
            if (mid === last) break;
            last = mid;
            blob = await new Promise((rs) =>
              canvas.toBlob(rs, "image/jpeg", mid)
            );
            console.log(
              `Kualitas turunkan sebanyak ${mid} dengan Blob size ${blob.size} bytes`
            );
            if (blob.size > MAX_SIZE) {
              end = mid;
            }
            if (blob.size < MAX_SIZE) {
              start = mid;
              accepted = blob;
            }
          }
          var reader = new FileReader();
          reader.readAsDataURL(accepted);
          reader.onloadend = function () {
            var base64data = reader.result;
            //   console.log(base64data);
            resolve(base64data);
          };
          reader.onerror = (error) => {
            reject(error);
          };
  
          // resolve(image.sizes);
        };
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  
  export default compressImgB64;
  