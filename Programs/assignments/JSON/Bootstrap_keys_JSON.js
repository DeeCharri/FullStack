//we have Bootstrap_keywords object which has list of properties
//let Bootstrap_keywords=
//{
//
//         Title:"https://getbootstrap.com :",
//		 URL:"https://getbootstrap.com/",
//         Description:"Bootstrap utilizes Sass for a modular and customizable architecture. Import only the components you need, enable global options like gradients and shadows, and ...",
//	     
//}
//console.log("Object ",Bootstrap_keywords)
////converting into string using JSON.stringify
//
//let string_format=JSON.stringify(Bootstrap_keywords);
//
//console.log("string ",string_format)

let string_keywords=
`{
      "x":
	  [
	     {    
		      "Title":"Bootstrap · The most popular HTML, CSS, and JS library in the ...",
              "URL":"https://getbootstrap.com/",
              "Description":"Bootstrap utilizes Sass for a modular and customizable architecture. Import only the components you need, enable global options like gradients and shadows, and ..."
	     }, 
		 {
			 "Title":"Bootstrap 3 Tutorial - W3Schools",
			 "URL":"https://www.w3schools.com/bootstrap/",
			 "Description":"Bootstrap is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites. Bootstrap is completely free to download ..."
		 }
     
	 ]
}`

let object_kwywords = JSON.parse(string_keywords)
//console.log(object_kwywords.x)
let content=""
for(data of object_kwywords.x )
{
	//console.log("------------------------")
	//console.log(data.Title)
	content+=`<div>
		<h4><a href=${data.URL} style="text-decoration:none;color:purple">${data.Title}</a></h4>
		<p>${data.Description}</p>
		
	</div>`
}

document.getElementById("content").innerHTML=content

//====================================== sub part of boot strap================================================")

let SUb_links=
`{
	"sub_links":
	[
	     {    
		     "Title":"5.1",
			 "URL":"https://getbootstrap.com/docs/5.1/getting-started/introduction/",
			 "Description":"Navbar - Contents - JavaScript - ..."
	     },
		 {    
		     "Title":"Introduction",
			 "URL":"https://getbootstrap.com/docs/5.0/getting-started/introduction/",
			 "Description":"Download - Navbar - Examples - Contents - ..."

         },
		 {    
		     "Title":"V4.6.x docs",
		     "URL":"https://getbootstrap.com/docs/4.6/getting-started/introduction/",
		    
		     "Description":"Download - Navbar - Examples - Contents - ..."

         },
		 {    
		     "Title":"Get started with Bootstrap",
		     "URL":"https://getbootstrap.com/docs/5.2/getting-started/introduction/",
		    
		     "Description":"Bootstrap is a powerful, feature-packed frontend toolkit."

         },
		 {    
		     "Title":"More results from getbootstrap.com »",
		     "URL":"https://www.google.com/search?q=BootStrap+site:getbootstrap.com&sa=X&ved=2ahUKEwi2hoSsj534AhUXgGMGHTFPBm4QrAN6BAgMEAE",
		    
	         "Description":""

         }
	]
}`

let Objects_SUb_links= JSON.parse(SUb_links)
let sublinks=""
for(each_data of Objects_SUb_links.sub_links)
{
	sublinks+=`
	  <div>
	         <h4><a href=${each_data.URL} style="text-decoration:none;color:purple">${each_data.Title}</a></h4>
			 <p>${each_data.Description}</p>
	  </div>
	`
}

document.getElementById("sublist").innerHTML=sublinks  

//====================================== video part================================================")

let videos_keys=
`{
      "vid":
	  [
	     {    
		      "Video_link":"https://www.youtube.com/embed/5GcQtLDGXy8",
			  "Title":"Bootstrap · The most popular HTML, CSS, and JS library in the ...",
              "URL":"https://www.youtube.com/watch?v=5GcQtLDGXy8",
			  "Description":"Youtube Traversy Media",
			  "Date":"03-Jan-2017"
	     }, 
		 {    
		      "Video_link":"https://www.youtube.com/embed/4sosXZsdy-s",
			  "Title":"Bootstrap CSS Framework",
              "URL":"https://www.youtube.com/watch?v=-qfEOE4vtxE",
			  "Description":"Youtube freecodeCamp.org",
			  "Date":"07-Dec-2021"
	     },
		 {    
		      "Video_link":"https://www.youtube.com/embed/-qfEOE4vtxE",
			  "Title":"Bootstrap 5 Crash Course | Website Build and Deploy",
              "URL":"https://www.youtube.com/watch?v=-qfEOE4vtxE",
			  "Description":"Youtube freecodeCamp.org",
			  "Date":"09-June-2021"
	     }
		 
     
	 ]
}`

let Objs_videos_keys= JSON.parse(videos_keys)

let video=""

for(obj of Objs_videos_keys.vid)
{
	video+=`
	<div>
	      <iframe src="${obj.Video_link}" width="300px" height="150px" allow="accelerometer; autoplay; allowfullscreen style="display:inline-block"></iframe>
		  <ul style="list-style-type:none;display:inline-block">
		      <li><a href=${obj.URL} style="text-decoration:none;color:purple;">${obj.Title}</a></li>
			  <li><span>${obj.Description}</span></li>
              <li><span>${obj.Date}</span></li>
		  </ul>
		  <br><br>
	</div>
	`
}

document.getElementById("Video").innerHTML=video

//=======================================================================================================================

let search_result=
`{
	"searches":
	[
	    {
			"image":"https://www.incredible-web.com/media/7216/04698822-photo-jquery-logo.jpg",
			"text":"JQuery"
	    },
		{
			"image":"https://www.incredible-web.com/media/7216/04698822-photo-jquery-logo.jpg",
			"text":"JQuery"
	    },
		{
			"image":"https://www.incredible-web.com/media/7216/04698822-photo-jquery-logo.jpg",
			"text":"JQuery"
	    },
		{
			"image":"https://www.incredible-web.com/media/7216/04698822-photo-jquery-logo.jpg",
			"text":"JQuery"
	    },
		{
			"image":"https://www.incredible-web.com/media/7216/04698822-photo-jquery-logo.jpg",
			"text":"JQuery"
	    },
		{
			"image":"https://www.incredible-web.com/media/7216/04698822-photo-jquery-logo.jpg",
			"text":"JQuery"
	    }
	]
}`

let obj_searches=JSON.parse(search_result)
console.log(obj_searches.searches)
let search=""
search+=`<h2>Related searches:</h2>`
for(dt of obj_searches.searches)
{
	search+=`
	  <div>
	    
           <ul style="list-style-type:none;float:left">
		     
             <li> <img src="${dt.image}"style="width:200px;height:200px;"></img><br><span>${dt.text}</span></li>
           </ul>
	  </div>
	`
}

document.getElementById("search").innerHTML=search

//===================================================

let Web_frameworks=
`{
      "framework":
	  [
	     {    
		      "Title":"JQuery",
      
              "Description":"jQuery is a lightweight,write less, do more, JavaScript library. The purpose of jQuery is to make it much easier to use JavaScript on your website. jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code"
	     }, 
		 {
			 "Title":"Angular",
			 
			 "Description":"Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications"
		 }
     
	 ]
}`

let object_Web_frameworks = JSON.parse(Web_frameworks)



let accordion_item = document.getElementById('accordion_item')
let i=0
accordion_item.innerHTML+=`<div class="accordion-item border-0">
			    <h2 class="accordion-header border-0" id="headingone">
			      <button class="accordion-button collapsed border-0 fs-3 text-dark fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseone" aria-expanded="true" aria-controls="collapseone">
					  Web UI FrameWork
			      </button>
			    </h2>`
for (dt1 of object_Web_frameworks.framework) 
{
	i++
    accordion_item.innerHTML+=`
			    <div id="collapseone" class="accordion-collapse collapse border-0" aria-labelledby="headingone" data-bs-parent="#accordionExample">
                      <div class="accordion-body border-0">
                         <div>
	    
                              <ul style="list-style-type:none;float:left">
		                        
                                <li><h3>${dt1.Title}</h3></li>
								<li>${dt1.Description}</li>
                              </ul>
	                     </div>
                      </div>
                </div>
		</div>`
}