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

document.addEventListener("DOMContentLoaded", () => {
    toggleButton("all_btn");
});
// Toggle Button Create
function toggleButton(id) {
    allBtn.classList.remove("bg-[#3b82f6]", "text-white");
    interviewBtn.classList.remove("bg-[#3b82f6]", "text-white");
    rejectedBtn.classList.remove("bg-[#3b82f6]", "text-white");

    allBtn.classList.add("bg-base-100", "text-neutral/70");
    interviewBtn.classList.add("bg-base-100", "text-neutral/70");
    rejectedBtn.classList.add("bg-base-100", "text-neutral/70");

    const selected = document.getElementById(id);
    selected.classList.add(
        "bg-[#3b82f6]",
        "text-white",
        "transition-all",
        "duration-300",
    );

    if (id === "all_btn") {
        mainContainer.classList.remove("hidden");
        interviewContainer.classList.add("hidden");
        rejectedContainer.classList.add("hidden");
        selectedCategory = "all_btn";
    }
    if (id === "interview_btn") {
        mainContainer.classList.add("hidden");
        interviewContainer.classList.remove("hidden");
        rejectedContainer.classList.add("hidden");
        selectedCategory = "interview_btn";
    }
    if (id === "rejected_btn") {
        mainContainer.classList.add("hidden");
        interviewContainer.classList.add("hidden");
        rejectedContainer.classList.remove("hidden");
        selectedCategory = "rejected_btn";
    }
    itemsCounter();
}

// Counter Section
function itemsCounter() {
    totalCount.textContent = mainContainer.children.length;
    rejectedCount.textContent = rejectedItems.length;
    interviewCount.textContent = interviewItems.length;
}
itemsCounter();

// Function Call
mainContainer.addEventListener("click", handleEvent);

// Main Function
function handleEvent(e) {
    const parentItem = e.target.parentNode.parentNode.parentNode;
    if (e.target.classList.contains("interview_btn")) {
        const setType = parentItem.querySelector(".set_type");
        setType.innerHTML = `                                <p
                                    class="apply_type bg-success/10 px-3 py-2 inline-block text-neutral/90 rounded-[8px] border border-success/20 font-medium",
                                >
                                    INTERVIEW
                                </p>`;
        parentItem.classList.add(
            "border-l-5",
            "border-success",
            "transition-all",
            "duration-200",
            "ease-in-out",
            "bg-success/5",
        );
        parentItem.classList.remove("border-error", "border-error");

        const header = parentItem
            .querySelector(".sub_title")
            .textContent.trim();
        const type = parentItem.querySelector(".text_1").textContent.trim();
        const place = parentItem.querySelector(".place").textContent.trim();
        const JobType = parentItem
            .querySelector(".job_type")
            .textContent.trim();
        const salary = parentItem.querySelector(".salary").textContent.trim();
        const description = parentItem
            .querySelector(".description")
            .textContent.trim();
        const applyType = parentItem
            .querySelector(".apply_type")
            .textContent.trim();

        const setInfo = {
            header,
            type,
            place,
            JobType,
            salary,
            description,
            applyType,
        };
        console.log(setInfo);

        const interviewExit = interviewItems.find(
            (items) =>
                items.header.toLowerCase() === setInfo.header.toLowerCase(),
        );

        if (!interviewExit) {
            interviewItems.push(setInfo);
        }
    }

    if (e.target.classList.contains("rejected_btn")) {
        const setType = parentItem.querySelector(".set_type");
        setType.innerHTML = `                                <p
                                    class="apply_type bg-error/10 px-3 py-2 inline-block text-neutral/90 rounded-[8px] border border-error/20 font-medium"
                                >
                                    REJECTED
                                </p>`;
        parentItem.classList.add(
            "border-l-5",
            "border-error",
            "transition-all",
            "duration-200",
            "ease-in-out",
            "bg-error/5",
        );
        parentItem.classList.remove("border-success", "border-success");

        const header = parentItem
            .querySelector(".sub_title")
            .textContent.trim();
        const type = parentItem.querySelector(".text_1").textContent.trim();
        const place = parentItem.querySelector(".place").textContent.trim();
        const JobType = parentItem
            .querySelector(".job_type")
            .textContent.trim();
        const salary = parentItem.querySelector(".salary").textContent.trim();
        const description = parentItem
            .querySelector(".description")
            .textContent.trim();
        const applyType = parentItem
            .querySelector(".apply_type")
            .textContent.trim();

        const setInfo = {
            header,
            type,
            place,
            JobType,
            salary,
            description,
            applyType,
        };
        console.log(setInfo);

        const rejectedExit = rejectedItems.find((items) => items.header.toLowerCase() === setInfo.header.toLowerCase())

        if(!rejectedExit){
            rejectedItems.push(setInfo)
        }
    }
    itemsCounter();
}
