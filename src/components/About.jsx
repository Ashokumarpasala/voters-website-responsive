import React from 'react'

function About() {
  return (
    <div>
       <section style={{backgroundColor:"rgba(1, 1, 29, 1)", color:"whitesmoke"}} className=' p-5'>
        <div className='d-flex justify-content-center'>

      <h1 style={{borderRight:"5px solid white", fontSize:"60px", height:"300px"}} className='m-5 py-3 p-5 about'>About More</h1>
      <div className='p-5 content'>
       <p >An online voting system that will replace the 
        old ballot sytem or paper system. Over the time 
        we have utilized the required technology in every
        sector to improve efficiency and save the extra
        resources. But the voting system is still very 
        expensive and requires a bigger workforce.
        The system is slower and still not completely 
        tamper proof. We bring the system that is safe,
        reliable and solve the modern issues like higher
        reachability of the booth, crowd free voting, 
        inexpensive, faster results and others.</p>
        <h3>This  election is being conducted by the election  commission of India.  </h3>
        <p>You, as being a member of the constituency under the constituencies of Uttar Pradesh
          State Election, are allowed to vote. Please take the following steps in order to cast a 
          valid vote. You are requested to cast vote on your own decision and not by being 
          presserurized or terroized by someone. If someone threatens you for making a voting
          decsion please contact the given helpline numbers.

          Steps - 
          Stay in the frame of your camera alone and with suuficient lighting for the entire 
          duration.
          Have Security Keys with you as you would require it to proceed.
          You are allowed to make only one vote per election.
          You are allowed to choose only one candidate per election.
          Candidates information are available on the page.
          Make sure that you are selecting your wanted candidate by confirming the name
          and symbol on the screen.
          After selecting the candidates make sure to submit the vote.
          Result will be announced after 5 days of election being completed.
          You can verify your vote after the election results are announced.</p>
          <button className='btn btn-primary px-4'>Cancle</button>
          <button className='btn btn-primary px-4 mx-5'>Proceed</button>
        </div>
          </div>

      </section>
    </div>
  )
}

export default About
