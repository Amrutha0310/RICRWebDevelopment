 let b=1,
 c=1,
 g=0,
 i=0;
 st=0;

 
 const img=document.getElementById("image").src;
 console.log(img);

 if(img === "http://127.0.0.1:5500/Javascript/ImageEditor/index.html#"){
     document.getElementById("image").style.display = "none";
 }

 function upLoadImage(){
    const file=document.getElementById("Upload").files[0];
      const fileURL =URL.createObjectURL(file);
      document.getElementById("image").src=fileURL;
      document.getElementById("image").style.display="block";
      document.getElementById("uploadLabel").style.display ="none";
      applyFilter();
      
 }
 function applyFilter(){
  document.getElementById("image").style.filter=`brightness(${b})
                   contrast(${c})
                   grayscale(${g}%)
                   saturate(${st})
                   invert(${i}%)
                   sepia(${s}%)`;
                   
 }
 