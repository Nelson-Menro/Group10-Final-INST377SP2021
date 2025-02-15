async function windowsAction() {
  async function getPlaylist() {
    const endPoint = await fetch('./api/playlists');
    const playlists = await endPoint.json();
    const playlistContainer = document.querySelector('#playlistContainer');

    function displayPlaylists() {
      // eslint-disable-next-line no-template-curly-in-string
      // eslint-disable-next-line arrow-body-style
      const html = playlists.map((playlist) => {
        return `<button class="playlist-button box column" type="button">${playlist.playlist_name}</button>`;
      }).join('');
      playlistContainer.innerHTML = html;
    }

    displayPlaylists();
  }
  getPlaylist();

  async function getAlbums() {
    const endPoint = await fetch('./api/albums');
    const albums = await endPoint.json();
    const albumContainer = document.querySelector('#albumContainer');

    function displayAlbums() {
      // eslint-disable-next-line no-template-curly-in-string
      // eslint-disable-next-line arrow-body-style
      const html = albums.map((album) => {
        return `<button class="playlist-button box column" type="button">${album.album_name}</button>`;
      }).join('');
      albumContainer.innerHTML = html;
    }

    displayAlbums();
  }
  getAlbums();

  async function getPopSongs() {
    const endPoint = await fetch('./api/popsongs');
    const songs = await endPoint.json();
    const songContainer = document.querySelector('#popsongsContainer');
    function displayPlaylists() {
      // eslint-disable-next-line no-template-curly-in-string
      // eslint-disable-next-line arrow-body-style
      const html = songs.map((song) => {
        return `<ul>
                  <li>
                    <span class='song_name'>
                      ${song.song_name}
                      <form action="/api/popSongs:"${song.song_id}" method="post">
                        <button class="button is-warning"  type="submit">Delete</button>
                        <input  type = "hidden" name = "song_id" value = "${song.song_id}" />
                      </form>
                    </span>
                  </li>
                </ul>`;
      }).join('');
      songContainer.innerHTML = html;
    }

    displayPlaylists();
  }
  getPopSongs();

  async function getHipHopSongs() {
    const endPoint = await fetch('./api/rapSongs');
    const songs = await endPoint.json();
    const songContainer = document.querySelector('#hiphopsongsContainer');
    function displayPlaylists() {
      // eslint-disable-next-line no-template-curly-in-string
      // eslint-disable-next-line arrow-body-style
      const html = songs.map((song) => {
        return `<ul>
        <li>
          <span class='song_name'>
            ${song.song_name}
            <form action="/api/rapSongs/${song.song_id}?_method=DELETE" method="post"> 
              <button class="button is-warning"  type="submit">Delete</button>
              <input type="hidden" name="_method" value="DELETE">
            </form>
          </span>
        </li>
      </ul>`;
      }).join('');
      songContainer.innerHTML = html;
    }

    displayPlaylists();
  }
  getHipHopSongs();

  async function getHolidaySongs() {
    const endPoint = await fetch('./api/holidaySongs');
    const songs = await endPoint.json();
    const songContainer = document.querySelector('#holidaysongsContainer');

    function displayPlaylists() {
      // eslint-disable-next-line no-template-curly-in-string
      // eslint-disable-next-line arrow-body-style
      const html = songs.map((song) => {
        return `<ul>
        <li>
          <span class='song_name'>
            ${song.song_name}
            <form action="/api/holidaySongs/${song.song_id}?_method=DELETE" method="post"> 
              <button class="button is-warning"  type="submit">Delete</button>
              <input type="hidden" name="_method" value="DELETE">
            </form>
          </span>
        </li>
      </ul>`;
      }).join('');
      songContainer.innerHTML = html;
    }

    displayPlaylists();
  }
  getHolidaySongs();

  async function getUSTopSongs() {
    const endPoint = await fetch('./api/usChart');
    const songs = await endPoint.json();
    const songContainer = document.querySelector('#ustopsongsContainer');

    function displayPlaylists() {
      // eslint-disable-next-line no-template-curly-in-string
      // eslint-disable-next-line arrow-body-style
      // `<ul><li><span class='song_name'>${song.song_name}</span></li></ul>`).join('');
      const html = songs.map((song) => `<button class="playlist-button box column" type="button">${song.song_name}</button>`).join('');
      songContainer.innerHTML = html;
    }

    displayPlaylists();
  }
  getUSTopSongs();

  async function getGlobalTopSongs() {
    const endPoint = await fetch('./api/globalCharts');
    const songs = await endPoint.json();
    const songContainer = document.querySelector('#globaltopsongsContainer');

    function displayPlaylists() {
      // eslint-disable-next-line no-template-curly-in-string
      // eslint-disable-next-line arrow-body-style
      const html = songs.map((song) => {
        return `<button class="playlist-button box column" type="button">${song.song_name}</button>`;
      }).join('');
      songContainer.innerHTML = html;
    }

    displayPlaylists();
  }
  getGlobalTopSongs();

  async function getTopPodcasts() {
    const endPoint = await fetch('./api/podcastCharts');
    const podcasts = await endPoint.json();
    const podcastContainer = document.querySelector('#topPodcastsContainer');

    function displayPodcasts() {
      // eslint-disable-next-line no-template-curly-in-string
      // eslint-disable-next-line arrow-body-style
      const html = podcasts.map((podcast) => {
        return `<button class="playlist-button box column" type="button">${podcast.podcast_name}</button>`;
      }).join('');
      podcastContainer.innerHTML = html;
    }

    displayPodcasts();
  }
  getTopPodcasts();
}

async function getartists() {
  const endPoint = await fetch('./api/Artists');
  const artists = await endPoint.json();
  const artistcontainer = document.querySelector('#artistcontainer');

  function displayartists() {
    // eslint-disable-next-line no-template-curly-in-string
    // eslint-disable-next-line arrow-body-style
    const html = artists.map((artist) => {
      return `<button class="playlist-button box column" type="button">${artist.artist_name}</button>`;
    }).join('');
    artistcontainer.innerHTML = html;
  }

  displayartists();
}
getartists();

async function getAriana() {
  const endPoint = await fetch('./api/arianaSongs');
  const songs = await endPoint.json();
  const arianaContainer = document.querySelector('#arianaContainer');

  function displayAriana() {
    // eslint-disable-next-line no-template-curly-in-string
    // eslint-disable-next-line arrow-body-style
    const html = songs.map((song) => {
      return `<button class="playlist-button box column" type="button">${song.song_name}</button>`;
    }).join('');
    arianaContainer.innerHTML = html;
  }

  displayAriana();
}
getAriana();

async function getBadbunny() {
  const endPoint = await fetch('./api/badBunnySongs');
  const songs = await endPoint.json();
  const BadbunnyContainer = document.querySelector('#BadbunnyContainer');

  function displayBadbunny() {
    // eslint-disable-next-line no-template-curly-in-string
    // eslint-disable-next-line arrow-body-style
    const html = songs.map((song) => {
      return `<button class="playlist-button box column" type="button">${song.song_name}</button>`;
    }).join('');
    BadbunnyContainer.innerHTML = html;
  }

  displayBadbunny();
}
getBadbunny();

async function getBTS() {
  const endPoint = await fetch('./api/btsSongs');
  const songs = await endPoint.json();
  const BTSContainer = document.querySelector('#BTSContainer');

  function displayBTS() {
    // eslint-disable-next-line no-template-curly-in-string
    // eslint-disable-next-line arrow-body-style
    const html = songs.map((song) => {
      return `<button class="playlist-button box column" type="button">${song.song_name}</button>`;
    }).join('');
    BTSContainer.innerHTML = html;
  }

  displayBTS();
}
getBTS();

async function getSongs() {
  const endPoint = await fetch('./api/songs');
  const songs = await endPoint.json();
  const songsContainer = document.querySelector('#songsContainer');

  function displaySongs() {
    // eslint-disable-next-line no-template-curly-in-string
    // eslint-disable-next-line arrow-body-style
    const html = songs.map((song) => {
      return `<button class="playlist-button box column" type="button">${song.song_name}<button>delete</button></button>`;
    }).join('');
    songsContainer.innerHTML = html;
  }

  displaySongs();
}
getSongs();

window.onload = windowsAction();