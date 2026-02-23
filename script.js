// Names
const allBtn = document.getElementById("all_btn");
const interviewBtn = document.getElementById("interview_btn");
const rejectedBtn = document.getElementById("rejected_btn");


document.addEventListener("DOMContentLoaded",()=>{
    toggleButton("all_btn")
})
// Toggle Button Create
function toggleButton(id){
    allBtn.classList.remove("bg-[#3b82f6]", "text-white");
    interviewBtn.classList.remove("bg-[#3b82f6]", "text-white");
    rejectedBtn.classList.remove("bg-[#3b82f6]", "text-white");

    allBtn.classList.add("bg-base-100","text-neutral/70")
    interviewBtn.classList.add("bg-base-100","text-neutral/70")
    rejectedBtn.classList.add("bg-base-100","text-neutral/70")

    const selected = document.getElementById(id);
    selected.classList.add("bg-[#3b82f6]", "text-white","transition-all","duration-300");
}