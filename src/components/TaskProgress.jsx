import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import React from 'react'
import { useSelector } from 'react-redux';

function TaskProgress() {
const tasks = useSelector((state) => state.tasks);
let complete=0,incomplete=0;
for(let val of tasks)
{
  if(val.completed)
  {
    complete++;
  }
  else{
    incomplete++;
  }
}
let total=complete+incomplete;
console.log("progress",tasks)
const percentage = (complete/total)*100;
  return (

<CircularProgressbar
  strokeWidth={20}
  value={percentage}
  counterClockwise={true}
//   text={`${percentage}%`}
  styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',
    
    // Text size
    textSize: '16px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: `rgba(17, 255, 0, ${percentage / 100})`,
    textColor: 'black',
    trailColor: 'rgb(0, 51, 0)',
    backgroundColor: 'red',
  })}
/>
  )
}

export default TaskProgress
