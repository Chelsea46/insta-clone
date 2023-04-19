// data
const data = [{
    name: 'Cleo',
    img: './images/cleo.jpg',
    post: './images/tuna.jpg',
    caption: 'Lorem, ipsum dolor sit amet consectetur.',
    postLikes: 20
},{
    name: 'Tiger',
    img: './images/tiger.jpg',
    comment: 'Love!'
},{
    name: 'Loki',
    img: './images/loki.jpg',
    comment: "Couldn't agree more!"
},{
    name: "Cute",
    img: './images/cute.jpg',
    comment: 'Catfish for the win!'
}];

// document selection
const nav = document.getElementById('nav');
const story = document.getElementById('story');
const post = document.getElementById('post');
let likedBy = document.getElementById('liked-by');
const postDeets = document.getElementById('post-details');
const comments = document.getElementById('comments');
const replyBtn = document.getElementById('reply-btn');
const replies = document.getElementById('replies');
const viewComments = document.querySelector('.view-comments')
let modalContent = document.querySelector('.modal-content');

// modal
likedBy.addEventListener('click', ()=> {
    document.querySelector('.bg-modal').style.display = 'flex';
    modalContent.style.display = 'flex';
    modalContent.innerHTML = `
    <div class="close">+</div>
    <div class="liked-user">
        <img src="${data[1].img}" alt="cat" class="liked-img">
        <p class="liked-name">${data[1].name}</p>
    </div>
    <div class="liked-user">
        <img src="${data[2].img}" alt="cat" class="liked-img">
        <p class="liked-name">${data[2].name}</p>
    </div>
    <div class="liked-user">
        <img src="${data[3].img}" alt="cat" class="liked-img">
        <p class="liked-name">${data[3].name}</p>
</div>
    `
  });
  
document.addEventListener('click', function(e){
    const target = e.target.closest('.close');
    if(target){
        document.querySelector('.bg-modal').style.display = 'none';
        modalContent.style.display = 'none';
        modalContent.innerHTML = ``
    };
});
// end of modal


// rendering to HTML
nav.innerHTML = `<div class="logo">Instagram</div>
<div>
    <ul class="nav-links">
        <li class="dropdown"><i class="fa-regular fa-square-plus fa-2xl" style="color: #ffffff;"></i></li>
        <li class="notifications"><i class="fa-sharp fa-regular fa-heart fa-2xl" style="color: #ffffff;"></i></li>
    </ul>
</div>`;

story.innerHTML = `<div class="user-story">
<img src="${data[0].img}" alt="cat" class="user-img">
<p class="name">${data[0].name}</p>
</div>
<div class="user-story">
<img src="${data[1].img}" alt="cat" class="user-img">
<p class="name">${data[1].name}</p>
</div>
<div class="user-story">
<img src="${data[2].img}" alt="cat" class="user-img">
<p class="name">${data[2].name}</p>
</div>
<div class="user-story">
<img src="${data[3].img}" alt="cat" class="user-img">
<p class="name">${data[3].name}</p>
</div>`

post.innerHTML = `      <header>
<img src="${data[0].img}" alt="cat" class="user-img">
<div class="name">${data[0].name}</div>
</header>
<div class="post">
<img src="${data[0].post}" alt="tuna" class="post-img">
</div>
<div>
<ul class="actions">
   <li class="action-list"><i class="fa-sharp fa-regular fa-heart fa-2xl" style="color: #ffffff;"></i></li>
   <li class="action-list"><i class="fa-regular fa-comment fa-2xl" style="color: #ffffff;"></i></li>
   <li class="action-list"><i class="fa-regular fa-paper-plane fa-2xl" style="color: #ffffff;"></i></li>
</ul>
</div>`;

likedBy.innerHTML = `<p class="liked-by">3 Likes</p>`;

postDeets.innerHTML = ` <p class="user-name">${data[0].name}</p>
<p class="user-cap">Lorem, ipsum dolor sit amet consectetur.</p>`;

// comments.innerHTML = `<p class="user-name">${data[1].name}</p>
// <div class="comment">
//     <p>${data[1].comment}</p>
//     <p class="comment-heart"><i class="fa-sharp fa-regular fa-heart " style="color: #ffffff;"></i></p>
// </div>`;

// replyBtn.innerHTML = `<button class="reply-btn">View replies</button>`;

// replies.innerHTML = `<p class="user-name">${data[2].name}</p>
// <p class="user-cap">${data[2].comment}</p>`;

viewComments.addEventListener('click', () => {
    viewComments.style.marginBottom = '0em';
    comments.innerHTML = 
    `<p class="user-name">${data[1].name}</p>
    <div class="comment">
        <p>${data[1].comment}</p>
        <p class="comment-heart"><i class="fa-sharp fa-regular fa-heart " style="color: #ffffff;"></i></p>
    </div>`;

    replyBtn.innerHTML = 
    `<button class="reply-btn">View replies</button>`;

    replies.innerHTML = 
    `<p class="user-name">${data[2].name}</p>
    <p class="user-cap">${data[2].comment}</p>`;

});

// end of render

document.addEventListener('click', function(e){
    const target = e.target.closest('.fa-sharp');
    if(target){
        target.style.color = 'red';
        likedBy.innerHTML = `<p class="liked-by"> You and ${data[0].postLikes} others Like this post</p>`
    };
});


