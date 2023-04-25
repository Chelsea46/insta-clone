

// document selection
const nav = document.getElementById('nav');
const story = document.getElementById('story');


nav.innerHTML = `<div class="logo">Instagram</div>
<div>
    <ul class="nav-links">
        <li class="dropdown"><i class="fa-regular fa-square-plus fa-2xl" style="color: #ffffff;"></i></li>
        <li class="notifications"><i class="fa-sharp fa-regular fa-heart fa-2xl" style="color: #ffffff;"></i></li>
    </ul>
</div>`;


const storyData = [
    {
      name: 'Cleo',
      profilePic: "https://images.unsplash.com/photo-1503777119540-ce54b422baff?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODE3MjcwNDk&ixlib=rb-4.0.3&q=85"
    },
    {
      name: 'Tiger',
      profilePic: "https://images.unsplash.com/photo-1600880292630-ee8a00403024?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODE3MjcwNDk&ixlib=rb-4.0.3&q=85"
    },
    {
      name: 'Loki',
      profilePic:"https://images.unsplash.com/photo-1618924217601-502b99239681?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODE3MjcwNDk&ixlib=rb-4.0.3&q=85"
    },
    {
      name: 'Cutie',
      profilePic: "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODE3MjcwNDk&ixlib=rb-4.0.3&q=85"
    }
  ];

storyData.forEach(user => 
    story.innerHTML += `<div class="user-story">
 <img src="${user.profilePic}}" alt="cat" class="user-img">
 <p class="name">${user.name}</p>
</div>
`)

  const postData = [   
      {
          name: `Cleo`,
          profilePic: "https://images.unsplash.com/photo-1503777119540-ce54b422baff?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODE3MjcwNDk&ixlib=rb-4.0.3&q=85",
          likes: 27,
          post: "//images.unsplash.com/photo-1583122624875-e5621df595b3?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODIxNjQ4OTk&ixlib=rb-4.0.3&q=85",
          replies: [],
          isLiked: false,
          uuid: '4b161eee-c0f5-4545-9c4b-8562944223ee',
      },     
      {
          name: `Tiger`,
          profilePic: "https://images.unsplash.com/photo-1600880292630-ee8a00403024?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODE3MjcwNDk&ixlib=rb-4.0.3&q=85",
          likes: 6500,
          post: "https://images.unsplash.com/photo-1570646192295-4374691d97e2?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODIxNjU1Mjc&ixlib=rb-4.0.3&q=85",
        
          replies: [
                    {
                  name: `Cleo`,
                  profilePic: "https://images.unsplash.com/photo-1503777119540-ce54b422baff?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODE3MjcwNDk&ixlib=rb-4.0.3&q=85",
                  replyText: `Bugs!`,
              },
                    {
                  name: `Loki`,
                  profilePic: "https://images.unsplash.com/photo-1618924217601-502b99239681?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODE3MjcwNDk&ixlib=rb-4.0.3&q=85",
                  replyText: `NICE`,
              },
          ],
          isLiked: false,
          uuid: '3c23454ee-c0f5-9g9g-9c4b-77835tgs2',
      }
    ];

    function getFeedHtml(){
        let feedHtml = '';
        postData.forEach(function(post){ 
            if(post.replies.length){
                console.log(post.uuid)
            };

            let repliesHtml = ``;

            if(post.replies.length > 0){
                post.replies.forEach(function(reply){
                    repliesHtml =`
                    <p class="user-name">${reply.name}</p>
                    <p>${reply.replyText}</p>
                `
                });
            };

            feedHtml += ` 
        <header>
            <img src="${post.profilePic}" alt="cat" class="user-img">
            <div class="name">${post.name}</div>
        </header>
        <div class="post">
            <img src="${post.post}" alt="tuna" class="post-img">
        </div>
        <div>
            <ul class="actions">
                <li class="action-list"><i class="fa-sharp fa-regular fa-heart fa-2xl" data-like="${post.uuid}" style="color: #ffffff;"></i></li>
                <li class="action-list"><i class="fa-regular fa-comment fa-2xl" style="color: #ffffff;"></i></li>
                <li class="action-list"><i class="fa-regular fa-paper-plane fa-2xl" style="color: #ffffff;"></i></li>
            </ul>
        </div>
        <p class="liked-by" data-modal>${post.likes} Likes</p>
        <div id="post-details" class="post-details">
        <p class="user-name">${post.name}</p>
        <p class="user-cap">Lorem, ipsum dolor sit amet consectetur.</p>
        </div>
        <div data-comment="${post.uuid}" class="view-comments">
            View All Comments
        </div>
        <hr>
        <div class='hidden comments' id="${post.uuid}">
            ${repliesHtml}
    </div> 
</div>
        `}
        );
        return feedHtml
    };

    function render(){
        document.getElementById('render-post').innerHTML = getFeedHtml()
    }
    
    render()

        document.addEventListener('click', function(e){
            if(e.target.dataset.like){
                handleLikeClick(e.target.dataset.like)
            }else if(e.target.dataset.comment){
                handleReplyClick(e.target.dataset.comment)
            }else if(e.target.dataset.modal){
                handleModal(e.target.dataset.modal)
            };
        });

        function handleLikeClick(postId){
            const targetPostObj = postData.filter(function(post){
                return post.uuid === postId
            })[0]
            
            if (targetPostObj.isLiked){
                targetPostObj.likes--
                targetPostObj.isLiked = false
            }
            else{
                targetPostObj.likes++
                targetPostObj.isLiked = true     
            }
            render()
        };

        function handleReplyClick(replyId){
            document.getElementById(`${replyId}`).classList.toggle('hidden')
        };