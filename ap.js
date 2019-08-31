 // console.log("patience Big")
 var content = document.getElementById("content");
 fetch("https://api.themoviedb.org/3/movie/popular?api_key=ea12c869f716552bef3493abf72c3617&language=en-US&page=1").then(response=>{
 	return response.json()
}).then(data=>{
 	console.log(data.results)
 	var html = "";
 	data.results.forEach(item=>{
 		const div = `
 			<div class="col-md-3">
          <div class="card mb-4 shadow-sm">
            <img id="image" src="https://image.tmdb.org/t/p/w500/${item.poster_path}
				" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></img>
           
              <p class="card-text"></p>
              <p>title: <span id="genre"></span></p>

              <p>genre: <span id="title">${item.original_title}</span></p>
          </div>
 		`
 		html += div;

          // document.getElementById("image").src = "https://image.tmdb.org/t/p/w500"+item.poster_path
          // document.getElementById("title").innerHTML = item.original_title
          // document.getElementById("genre").innerHTML = item.genre


        // console.log(item.id)
 	})
 	content.innerHTML= html;

 		
})

	//  console.log(response.json()) })

 // console.log("patience email") 

 // 

