let currJob = -1;
let tempdata = data

function changeQuote() {
  filter = document.getElementById('select').value
  console.log(filter)
  if (filter === 'Dog') {
    tempdata = data.filter(job => job.type === 'Dog');
  }
  else if (filter === 'Cat') {
    tempdata = data.filter(job => job.type === 'Cat');
  }
  else {
    tempdata = data;
  }

  var jobNum = Math.floor(Math.random() * tempdata.length);
  if (document.getElementById("jobTitle").innerHTML != tempdata[jobNum].job) {
    document.getElementById("jobTitle").innerHTML = tempdata[jobNum].job;
    document.getElementById("jobImg").src = tempdata[jobNum].img;
    currJob = jobNum;
  }
  else changeQuote();
}

const jobFactory = () => {
  const giveQuote = 
    `<div class="savedJobBox" id="savedJobBox${currJob}" onclick="removeSave('savedJobBox${currJob}')">
      <i class="fa-solid fa-x" id="closeOut"></i>
      <p id="savedJobName">${tempdata[currJob].job}</p>
      <img class="savedJobsImg" src="${tempdata[currJob].img}">
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