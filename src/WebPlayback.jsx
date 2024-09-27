import React, { useState, useEffect } from 'react';

const initialTrack = {
    name: "",
    album: {
        images: [
            { url: "" }
        ]
    },
    artists: [
        { name: "" }
    ]
};

const trackIdMapping = {
    1: "2M9MK7bHLtZfaoFSTcpa9s",
2: "3RymDMwEBXmb6stYP2pEYK",
3: "54GaqfGqzJMohwQ9UT786U",
4: "2OTW4vdlCgtGTkjHsoceCI",
5: "6QaOslrNCoRQOA8MaD9mqJ",
6: "2gfQTx1vkWXXQDu99ehtIU",
7: "2kZ69mhnY1uFa3UBb2jGDC",
8: "6skwIDpDS3cBXrken1gwND",
9: "6TaCKDGQcYP34AjxzPvJpy",
10: "0LBekAvCF8LCtpj9N0WrYs",
11: "3DaBukEsGeX0SwygALotl1",
12: "106iFWTxZb65FLqP5VPEE6",
13: "3ABX5U22pSfiNrKzOplTfz",
14: "5SAFSL3TZZToYBaJGdhCKL",
15: "76farjQRfI204TOUAeAaJn",
16: "50YCXcOBUmoVpyYdnIK59D",
17: "7apzrHTscmfa16scz5Cb0v",
18: "13NuaEpNtNJpW2eaG9C6vR",
19: "6QmFEPTuQa1FTLjbpX2wiN",
20: "6z0aVLWSmO3nmVqE6NLXxo",
21: "4OvMscrRMOx5Sz4nUB820e",
22: "4niCpVJMz35AOVYRrNYvWM",
23: "4KUEJ0DY62ap96zdyfGabK",
24: "2DLNBSnbtzChiQnXKZDa1t",
25: "7poteI0BjopKFmhAHxBsD7",
26: "75qf4FUNLz7d2M2L9zJXmC",
27: "7amm6hnoq5Dpru7E01pHCU",
28: "41amkxajjtOcpZO4rz2Dt0",
29: "0mxAjFtROFqsDXvOJunRCW",
30: "6JG7OyfDB9qSbN4R0VehVI",
31: "2N0IA4oFzNu90lZudj9j8p",
32: "6fQGwOutKuHBtrBJOC5AHW",
33: "3wZrkP0y2oBUaIHKUNqlQ9",
34: "0sPtScdnJExvsOhC1w5az8",
35: "1pdhjcEuVvIvqCs9eH6noB",
36: "2u5OkW6s5ZnGulkyH8VBae",
37: "5RVSiAdHwW0PwI0U6Uu82P",
38: "2Ruv5qurnCATKxq7wSEJVg",
39: "4zWwXfQPjRdb77XIGzNMhD",
40: "7D3SsyvcYxBOwWqKj9AwBp",
41: "5GGmqj6TtMMseESjMrztOn",
42: "54PtzQTOxyUxLS6crGXvuo",
43: "0FgEqQqLcJogzTUMOVXdpU",
44: "5K8qeZkCUPratBKF78ZhSq",
45: "4j1skFLI10mXWGMrA5GKkZ",
46: "5Xg3eUdxaMUHLWXYYXpF7w",
47: "2f2X724I0imFJAn5xDbDiX",
48: "2sOvrfH1f16DKDXXtti7hm",
49: "0Aiqf2xOdO3TxrbW6itoFF",
50: "2SRcDCMGP1zdSpZEPrT7ai",
51: "7mZgSFops4OtnqEBPWkze4",
52: "4YrJnw7JB5debfytn6LwAv",
53: "6KgTDKvlI2cSyrRUi6yFPO",
54: "2yIVgYjCiQ2IQxLp00dvDe",
55: "0DnHVFzNNmt6bqsGaXjpgS",
56: "3746a0qomoJPv0J4uYrFyw",
57: "3jQbRpNzByZiLmzTqjR2Dm",
58: "4wByBwCsFqfZzgdFSGoMFt",
};

const trackConfig = {
    1: [17, 22],
    2: [9, 25],
    3: [16, 18],
    4: [8, 21],
    5: [10, 21],
    6: [1],
    7: [14, 20],
    8: [11, 27],
    9: [1],
    10: [7, 12],
    11: [13, 24],
    12: [8, 21],
    13: [1],
    14: [4, 15],
    15: [1],
    16: [23, 28],
    17: [1],
    18: [2, 6],
    19: [1],
    20: [1],
    21: [3, 19],
    22: [8, 10, 21],
    23: [1],
    24: [5, 10, 21],
    25: [1],
    26: [1],
    27: [1],
    28: [36, 43],
    29: [58],
    30: [47, 48],
    31: [32, 51],
    32: [1],
    33: [38, 44],
    34: [35, 55],
    35: [58],
    36: [33],
    37: [1],
    38: [40, 45],
    39: [1],
    40: [34, 52],
    41: [39, 42],
    42: [1], // winning track
    43: [33],
    44: [1],
    45: [30, 46],
    46: [40],
    47: [37, 49],
    48: [31, 50],
    49: [1],
    50: [40],
    51: [32],
    52: [1],
    53: [56],
    54: [1],
    55: [29, 57],
    56: [41, 53, 54],
    57: [1],
    58: [56],
};

const tracks = [
    { id: 1, name: "01. Die Geisterbahn" },
{ id: 2, name: "02. Paket dem Gouverneur übergeben" },
{ id: 3, name: "03. Werbeanzeigen lesen" },
{ id: 4, name: "04. Vor Bubba verstecken" },
{ id: 5, name: "05. Geisterbahn beobachten" },
{ id: 6, name: "06. Paket selbst öffnen" },
{ id: 7, name: "07. Bei Bubba bleiben" },
{ id: 8, name: "08. Mit Joey sprechen" },
{ id: 9, name: "09. Flucht zu den drei ???" },
{ id: 10, name: "10. Mit Bubba Detroit sprechen" },
{ id: 11, name: "11. Joey verfolgen" },
{ id: 12, name: "12. Justus hinterher rennen" },
{ id: 13, name: "13. Bei den drei ??? bleiben" },
{ id: 14, name: "14. Ich habe viel Geduld" },
{ id: 15, name: "15. Bubba abschütteln" },
{ id: 16, name: "16. Geisterbahn von innen untersuchen" },
{ id: 17, name: "17. Verstecken in der Achterbahn" },
{ id: 18, name: "18. Geisterbahn von außen untersuchen" },
{ id: 19, name: "19. Die Zaubershow besuchen" },
{ id: 20, name: "20. Ich habe wenig Geld" },
{ id: 21, name: "21. Mit Marilyn sprechen" },
{ id: 22, name: "22. Verstecken in der Geisterbahn" },
{ id: 23, name: "23. Die Frau mit der Flugtasche befragen" },
{ id: 24, name: "24. Zu Margarine schleichen" },
{ id: 25, name: "25. Flucht über die Grenze nach Süden" },
{ id: 26, name: "26. Der nimmt mir alles weg" },
{ id: 27, name: "27. Den Verfolger verfolgen" },
{ id: 28, name: "28. Die Frau mit der Flugtasche verfolgen" },
{ id: 29, name: "29. Wir warten auf Mrs. Millar" },
{ id: 30, name: "30. Wir wollen bleiben" },
{ id: 31, name: "31. Die Tür öffnen" },
{ id: 32, name: "32. Wir wollen die Belohnung" },
{ id: 33, name: "33. Eine Autofahrt" },
{ id: 34, name: "34. Ich helfe Justus bei der Arbeit" },
{ id: 35, name: "35. Mrs. Millar nicht treffen" },
{ id: 36, name: "36. Die Popcorntüte stehlen" },
{ id: 37, name: "37. Jemand soll mich umprogrammieren" },
{ id: 38, name: "38. Die Krebs-Anzeige ist wichtig" },
{ id: 39, name: "39. Joey an der Flucht hindern" },
{ id: 40, name: "40. $ 100 auftreiben" },
{ id: 41, name: "41. Mit einem Schuh werfen" },
{ id: 42, name: "42. In der Geisterbahn nachsehen" },
{ id: 43, name: "43. Um eine Mitfahrgelegenheit bitten" },
{ id: 44, name: "44. Die Popcorn-Anzeige ist wichtig" },
{ id: 45, name: "45. Postfächer überwachen" },
{ id: 46, name: "46. Wir wollen gehen" },
{ id: 47, name: "47. Mehr als vier Mal \"Ja!\" geantwortet" },
{ id: 48, name: "48. Weniger als vier Mal \"Ja!\" geantwortet" },
{ id: 49, name: "49. Ich will für immer bleiben" },
{ id: 50, name: "50. Durch das Fenster fliehen" },
{ id: 51, name: "51. Wir wollen die Belohnung nicht" },
{ id: 52, name: "52. Justus arbeitet alleine" },
{ id: 53, name: "53. Um Hilfe rufen" },
{ id: 54, name: "54. Etwas Einmaliges tun" },
{ id: 55, name: "55. Mrs. Millar treffen" },
{ id: 56, name: "56. Auf dem Riesenrad" },
{ id: 57, name: "57. Wir gehen hinein" },
{ id: 58, name: "58. Mortons zweite Chance" },
];

function WebPlayback(props) {

    const [is_paused, setPaused] = useState(false);
    const [is_active, setActive] = useState(false);
    const [player, setPlayer] = useState(undefined);
    const [current_track, setTrack] = useState(initialTrack);
    const [availableTracks, setAvailableTracks] = useState([]);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;
    
        document.body.appendChild(script);
    
        window.onSpotifyWebPlaybackSDKReady = () => {
            const player = new window.Spotify.Player({
                name: 'Web Playback SDK',
                getOAuthToken: cb => { cb(props.token); },
                volume: 0.5
            });
    
            setPlayer(player);
    
            player.addListener('ready', ({ device_id }) => {
                console.log('Ready with Device ID', device_id);
                // Start playing the first track immediately
                playTrack(1);
            });
    
            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });
    
            player.addListener('player_state_changed', (state => {
                if (!state) {
                    return;
                }
    
                setTrack(state.track_window.current_track);
                setPaused(state.paused);
    
                player.getCurrentState().then(state => {
                    (!state) ? setActive(false) : setActive(true);
                });
    
                const currentTrackId = Object.keys(trackIdMapping).find(key => trackIdMapping[key] === state.track_window.current_track.id);
                const newAvailableTracks = trackConfig[currentTrackId] || [];
                setAvailableTracks(newAvailableTracks);
            }));
    
            player.connect();
        };
    }, []);
    

    const playTrack = (shortId) => {
        const trackId = trackIdMapping[shortId];
        fetch(`https://api.spotify.com/v1/me/player/play`, {
            method: 'PUT',
            body: JSON.stringify({ uris: [`spotify:track:${trackId}`] }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            }
        }).then(() => {
            setAvailableTracks(trackConfig[shortId] || []);
        });
    };

    const availableTrackButtons = tracks.filter(track => availableTracks.includes(track.id));

    if (!is_active) {
        return (
            <>
                <div className="container">
                    <div className="main-wrapper">
                        <b> Instance not active. Transfer your playback using your Spotify app </b>
                    </div>
                    <div className="track-list">
                        {availableTrackButtons.map(track => (
                            <button key={track.id} onClick={() => playTrack(track.id)}>
                                {track.name}
                            </button>
                        ))}
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="container">
                    <div className="main-wrapper">

                        <img src={current_track.album.images[0].url} className="now-playing__cover" alt="" />

                        <div className="now-playing__side">
                            <div className="now-playing__name">{current_track.name}</div>
                            <div className="now-playing__artist">{current_track.artists[0].name}</div>

                            <button className="btn-spotify" onClick={() => { player.previousTrack() }} >
                                &lt;&lt;
                            </button>

                            <button className="btn-spotify" onClick={() => { player.togglePlay() }} >
                                {is_paused ? "PLAY" : "PAUSE"}
                            </button>

                            <button className="btn-spotify" onClick={() => { player.nextTrack() }} >
                                &gt;&gt;
                            </button>
                        </div>
                    </div>
                    <div className="track-list">
                        {availableTrackButtons.map(track => (
                            <button key={track.id} onClick={() => playTrack(track.id)}>
                                {track.name}
                            </button>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

export default WebPlayback;
