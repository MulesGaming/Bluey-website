// Channel

// Get channel data

fetch("https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=statistics&id=UCdTs7rNvX-FLa7hsOjBvm4g&maxResults=1&key=AIzaSyAccTrA_ccQekLVh-W3z34A-jt9tQeLO_o")

  // Subscribe area

  .then((result)=>{
    return result.json()
  }).then((data)=>{

    // Info Log 
    console.log(data)

    // LET blank = blank
    let channelContaner = document.querySelector(".yt-channel-holder")
    let channel = data.items
    
    for(channel of channel){
      // HTML
      channelContaner.innerHTML += `
      <div class="channel-info">
        <img src="${channel.snippet.thumbnails.default.url}" class="channel-icon" title="Bluey's Channel picture" alt="ERROR: Channel picture failed to load">
        <h3 class="channel-name">${channel.snippet.title}</h3>
      </div>
      <div class="buttons">
        <a href="https://www.youtube.com/channel/UCdTs7rNvX-FLa7hsOjBvm4g/"><button class="yt-channel-button">Youtube channel</button></a><br>
        <a href="https://www.youtube.com/channel/UCdTs7rNvX-FLa7hsOjBvm4g?sub_confirmation=1"><button class="subscribers">${channel.statistics.subscriberCount} Subscribers</button></a><br>
      </div>
      `
    }

  })

