//Button Names
const allBtn = document.getElementById("all_btn");
const interviewBtn = document.getElementById("interview_btn");
const rejectedBtn = document.getElementById("rejected_btn");

// Counter Names
const totalCount = document.getElementById("total_count");
const interviewCount = document.getElementById("interview_count");
const rejectedCount = document.getElementById("rejected_count");


// Containers
const mainContainer = document.getElementById("main_container");
const interviewContainer = document.getElementById("interview_container");
const rejectedContainer = document.getElementById("rejected_container");


// Containers Variables
let interviewItems = [];
let rejectedItems = [];
let selectedCategory = "all_btn";


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


// Counter Section 
function itemsCounter(){
    totalCount.textContent = mainContainer.children.length;
    rejectedCount.textContent = rejectedItems.length;
    interviewCount.textContent = interviewItems.length;
}
itemsCounter();