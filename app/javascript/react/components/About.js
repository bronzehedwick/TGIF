import React, { useState, useEffect } from "react";

const About = (props) => {
  const [getAboutData, setAboutData] = useState({
    shows: 0,
    episodes: 0
  })

  useEffect(() => {
    fetch(`/api/v1/episodes/`)
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => response.json())
      .then(body => {
        let data = body;
        setAboutData({...getAboutData,
          shows: data.show_count,
          episodes: data.episode_count
        })
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  return (
    <div id="about"> 
      <p>TGIF was a popular two hour television programming block that began in 1989 and ran until 2000. Each Friday night a block of four 30-minute episodes from different shows would air together.</p>

      <p>While many of the shows are available on Hulu.com and other streaming platforms at this point, there was not a resource online letting fans know which episodes air together and on what specific days.</p>

      <p>This website was created to make this information available again so that fans can rewatch a specific Friday night of TGIF programming and experience the shows together! </p>

      <p>There are currently <b>{getAboutData.shows}</b> shows and <b>{getAboutData.episodes}</b> episodes in the database. This represents yearly programming data up to the Spring 1995 but we hope to add additional years of show data in the near future!</p>
    </div>
  )
}


export default About;