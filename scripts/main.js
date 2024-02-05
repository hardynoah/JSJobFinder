let currJob = -1;

function changeQuote() {
  var jobNum = Math.floor(Math.random() * data.length);
  if (document.getElementById("jobTitle").innerHTML != data[jobNum].job) {
    document.getElementById("jobTitle").innerHTML = data[jobNum].job;
    document.getElementById("jobImg").src = data[jobNum].img;
    currJob = jobNum;
  }
  else changeQuote();
}

const jobFactory = () => {
  const giveQuote = 
    `<div class="savedJobBox" id="savedJobBox${currJob}" onclick="removeSave('savedJobBox${currJob}')">
      <i class="fa-solid fa-x" id="closeOut"></i>
      <p id="savedJobName">${data[currJob].job}</p>
      <img class="savedJobsImg" src="${data[currJob].img}">
    </div>`;
  return giveQuote;
};

function addJob() {
  if (currJob === -1) {
    return;
  }
  if (document.getElementById('savedJobBox' + currJob) != null) {
    changeQuote();
    return;  
  }
  let parent = document.getElementById('savedJobs');
  parent.insertAdjacentHTML('beforeend', jobFactory());
  changeQuote();
};

function removeSave(jobName) {
  document.getElementById(jobName).remove();
}