# Streaming Servers Registry

The following table lists all available streaming servers configured in OneFlix, including their ID support (IMDb/TMDB) and embed formats.

| Server Label | Server Key | IMDb Support | TMDB Support | Movie URL / Embed Pattern | TV URL / Embed Pattern |
| :--- | :--- | :---: | :---: | :--- | :--- |
| **IQSmart Games** | `iqsmartgames` | Yes | Yes | `https://streams.iqsmartgames.com/embed/movie/{IMDB_ID}?key=e11a7de...` | `https://streams.iqsmartgames.com/embed/tv/{TMDB_ID}/{season}/{episode}?key=e11a7de...` |
| **Videasy Player** | `videasy` | No | Yes | `https://player.videasy.to/movie/{TMDB_ID}` | `https://player.videasy.to/tv/{TMDB_ID}/{season}/{episode}?nextEpisode=true&autoplayNextEpisode=true&episodeSelector=true` |
| **PrimeSrc — Multi host** | `primesrc` | Yes | Yes | `https://primesrc.me/embed/movie?imdb={IMDB_ID}` / `?tmdb={TMDB_ID}` | `https://primesrc.me/embed/tv?imdb={IMDB_ID}&season={s}&episode={e}` |
| **XPlay — TMDB / IMDb** | `xplay` | Yes | Yes | `https://play.xpass.top/e/movie/{ID}` | `https://play.xpass.top/e/tv/{ID}/{season}/{episode}` |
| **Piexe — IMDb** | `piexe` | Yes | No | `https://piexe411qok.com/play/{IMDB_ID}` | N/A |
| **NextGen Cloud — TMDB / IMDb** | `nextgen` | Yes | Yes | `https://nextgencloudfabric.com/embed/movie/{ID}` | `https://nextgencloudfabric.com/embed/tv/{ID}/{season}/{episode}` |
| **NontonGo — TMDB / IMDb** | `nontongo` | Yes | Yes | `https://www.nontongo.win/embed/movie/{ID}` | `https://www.nontongo.win/embed/tv/{ID}/{season}/{episode}` |
| **Vidfast — Auto play** | `vidfast` | Yes | Yes | `https://vidfast.pro/movie/{ID}?autoPlay=true` | `https://vidfast.pro/tv/{ID}/{season}/{episode}?autoPlay=true&nextButton=true&autoNext=true` |
| **VidCore — Auto play** | `vidcore` | Yes | Yes | `https://vidcore.net/movie/{ID}?autoPlay=true&theme={hex}` | `https://vidcore.net/tv/{ID}/{season}/{episode}?autoPlay=true&nextButton=true&autoNext=true&theme={hex}` |
| **Nxsha — Multi server** | `nxsha` | Yes | Yes | `https://nxsha.space/embed/movie/{ID}` | `https://nxsha.space/embed/tv/{ID}/{season}/{episode}` |
| **111movies — Ads free** | `111movies` | Yes | Yes | `https://111movies.net/movie/{ID}` | `https://111movies.net/tv/{ID}/{season}/{episode}` |
| **Peachify** | `peachify` | Yes | Yes | `https://peachify.top/embed/movie/{ID}?accent={hex}` | `https://peachify.top/embed/tv/{ID}/{season}/{episode}?accent={hex}` |
| **VidSrc.wtf — Multi Server** | `vidsrc_wtf_1` | Yes | Yes | `https://vidsrc.wtf/1/movie/{ID}?color={hex}` | `https://vidsrc.wtf/1/tv/{ID}/{season}/{episode}?color={hex}` |
| **VidSrc.wtf — Multi Language** | `vidsrc_wtf_2` | Yes | Yes | `https://vidsrc.wtf/2/movie/{ID}?color={hex}` | `https://vidsrc.wtf/2/tv/{ID}/{season}/{episode}?color={hex}` |
| **ScreenScape — Multi lang** | `screenscape` | Yes | Yes | `https://flix.screenscape.me/embed?type=movie&imdb={IMDB_ID}` | `https://flix.screenscape.me/embed?type=tv&imdb={IMDB_ID}&s={season}&e={episode}` |
| **Vidout — Multi lang** | `vidout` | No | Yes | `https://watchout-player.netlify.app/movie/{TMDB_ID}` | `https://watchout-player.netlify.app/tv/{TMDB_ID}/S{season}/E{episode}` |
| **VidNest — TMDB** | `vidnest` | No | Yes | `https://vidnest.fun/movie/{TMDB_ID}` | `https://vidnest.fun/tv/{TMDB_ID}/{season}/{episode}` |
| **VidSrc.wtf — Multi Embeds** | `vidsrc_wtf_3` | Yes | Yes | `https://vidsrc.wtf/3/movie/{ID}?color={hex}` | `https://vidsrc.wtf/3/tv/{ID}/{season}/{episode}?color={hex}` |
| **VidSrc.wtf — Premium** | `vidsrc_wtf_4` | Yes | Yes | `https://vidsrc.wtf/4/movie/{ID}?color={hex}` | `https://vidsrc.wtf/4/tv/{ID}/{season}/{episode}?color={hex}` |
| **VidKing** | `vidking` | No | Yes | `https://www.vidking.net/embed/movie/{TMDB_ID}?autoPlay=true` | `https://www.vidking.net/embed/tv/{TMDB_ID}/{season}/{episode}?autoPlay=true` |
| **VidStorm** | `vidstorm` | Yes | Yes | `https://vidstorm.ru/movie/{ID}` | `https://vidstorm.ru/tv/{ID}/{season}/{episode}` |
| **VidLink Pro** | `vidlink` | No | Yes | `https://vidlink.pro/movie/{TMDB_ID}` | `https://vidlink.pro/tv/{TMDB_ID}/{season}/{episode}` |
| **VidSrc.su** | `vidsrc_su` | Yes | Yes | `https://vidsrc.su/movie/{ID}?autoplay=true&colour={hex}&backbutton={backbutton}&logo={logo}` | `https://vidsrc.su/tv/{ID}/{season}/{episode}?autoplay=true&colour={hex}&autonextepisode=true&backbutton={backbutton}&logo={logo}` |
| **2Embed** | `2embed` | Yes | Yes | `https://www.2embed.cc/embed/{ID}` | `https://www.2embed.cc/embedtv/{ID}&s={s}&e={e}` |

*Note: `{ID}` represents dynamic routing to whichever ID (IMDb or TMDB) is available, prioritizing IMDb where applicable.*
