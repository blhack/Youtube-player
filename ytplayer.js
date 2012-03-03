videos = new Array;
var current_vid = 0;


function onYtStateChange(state) {
	if (state == 0) {
		next();
		}
	}

function onYouTubePlayerReady(player_id) {

	ytplayer = document.getElementById("ytPlayer");
	ytplayer.addEventListener("onStateChange","onYtStateChange");

	}

function add_video(video_id) {
	
	vidoes.push(video_id);
	}

function init(video_ids) {

	for (var key in video_ids) {
		videos.push(video_ids[key]);
		}
	youtube_video_id = videos[0];
	var params = { allowScriptAccess: "always" };
	var atts = { id: "ytPlayer" };
	swfobject.embedSWF("http://www.youtube.com/v/" + youtube_video_id + "?version=3&enablejsapi=1&autoplay=1&playerapiid=player1", "movie", "600", "390", "9", null, null, params, atts);

}

function next() {
	
	number_of_videos = videos.length;
	current_vid+=1;

	if (current_vid >= number_of_videos) {
		current_vid = 0;
		}
	var youtube_video_id = videos[current_vid];
	ytplayer.loadVideoById(youtube_video_id);	
	}


