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

    selectedCategory = id;

    if (id === "all_btn") {
        mainContainer.classList.remove("hidden");
        interviewContainer.classList.add("hidden");
        rejectedContainer.classList.add("hidden");
    }
    if (id === "interview_btn") {
        mainContainer.classList.add("hidden");
        interviewContainer.classList.remove("hidden");
        rejectedContainer.classList.add("hidden");
        renderInterview();
    }
    if (id === "rejected_btn") {
        mainContainer.classList.add("hidden");
        interviewContainer.classList.add("hidden");
        rejectedContainer.classList.remove("hidden");
        renderRejected();
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
interviewContainer.addEventListener("click", handleEvent);
rejectedContainer.addEventListener("click", handleEvent)

// Main Function
function handleEvent(e) {
    if (e.target.classList.contains("interview_btn")) {
        const parentItem = e.target.parentNode.parentNode.parentNode;
        const setType = parentItem.querySelector(".set_type");
        setType.innerHTML = `                                <p
                                    class="apply_type bg-success/10 px-3 py-2 inline-block text-neutral/90 rounded-[8px] border border-success/20 font-medium"
                                >
                                    INTERVIEW
                                </p>`;
        parentItem.classList.remove("border-error", "bg-error/5", "border-l-5");
        parentItem.classList.add(
            "border-l-5",
            "border-success",
            "transition-all",
            "duration-200",
            "ease-in-out",
            "bg-success/5",
        );

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

        rejectedItems = rejectedItems.filter(
            (items) =>
                items.header.toLowerCase() !== setInfo.header.toLowerCase(),
        );

        if (selectedCategory === "rejected_btn") {
            renderRejected();
        }
    }

    if (e.target.classList.contains("rejected_btn")) {
        const parentItem = e.target.parentNode.parentNode.parentNode;
        const setType = parentItem.querySelector(".set_type");
        setType.innerHTML = `                                <p
                                    class="apply_type bg-error/10 px-3 py-2 inline-block text-neutral/90 rounded-[8px] border border-error/20 font-medium"
                                >
                                    REJECTED
                                </p>`;
        parentItem.classList.remove(
            "border-success",
            "bg-success/5",
            "border-l-5",
        );
        parentItem.classList.add(
            "border-l-5",
            "border-error",
            "transition-all",
            "duration-200",
            "ease-in-out",
            "bg-error/5",
        );

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

        const rejectedExit = rejectedItems.find(
            (items) =>
                items.header.toLowerCase() === setInfo.header.toLowerCase(),
        );

        if (!rejectedExit) {
            rejectedItems.push(setInfo);
        }

        interviewItems = interviewItems.filter(
            (items) =>
                items.header.toLowerCase() !== setInfo.header.toLowerCase(),
        );
        if (selectedCategory === "interview_btn") {
            renderInterview();
        }
    }
    itemsCounter();
}

// Interview Section render
function renderInterview() {
    interviewContainer.innerHTML = "";
    interviewItems.forEach((items) => {
        const div = document.createElement("div");
        div.classList =
            "flex justify-between bg-base-100 border border-l-5 border-success p-6 rounded-[8px]";
        div.innerHTML = `<div class="left space-y-5">
                        <div class="heading space-y-1">
                            <h2
                                class="sub_title text-[18px] opacity-90 text-neutral text-[18px] font-semibold"
                            >
                                ${items.header}
                            </h2>
                            <p
                                class="text_1 text-neutral opacity-60 text-[16px]"
                            >
                                ${items.type}
                            </p>
                        </div>
                        <div
                            class="type flex text-neutral opacity-60 text-[14px] sm:text-[16px]"
                        >
                            <p class="place">${items.place}</p>
                            <ul class="list-disc list-outside pl-6 flex gap-7">
                                <li class="job_type">${items.JobType}</li>
                                <li class="salary">${items.salary}</li>
                            </ul>
                        </div>
                        <div class="apply space-y-2">
                            <div class="set_type  transition-all duration-300 ease-in-out">
                                <p
                                    class="apply_type bg-success/10 px-3 py-2 inline-block text-neutral/90 rounded-[8px] border border-success/20 font-medium"
                                >
                                    ${items.applyType}
                                </p>
                            </div>
                            <p class="description text-[14px] text-neutral/90">
                               ${items.description}
                            </p>
                        </div>
                        <div class="button flex gap-2">
                            <button
                                class="interview_btn btn btn-success btn-outline border-2"
                            >
                                INTERVIEW
                            </button>
                            <button
                                class="rejected_btn btn btn-error btn-outline border-2"
                            >
                                REJECTED
                            </button>
                        </div>
                    </div>
                    <div class="right">
                        <div
                            class="w-8 h-8 circle rounded-full border-2 border-base-300 cursor-pointer flex items-center justify-center"
                        >
                            <i
                                class="text-neutral/50 fa-regular fa-trash-can"
                            ></i>
                        </div>
                    </div>`;
        interviewContainer.prepend(div);
    });
}

// Rejected Section Render
function renderRejected() {
    rejectedContainer.innerHTML = "";
    rejectedItems.forEach((items) => {
        const div = document.createElement("div");
        div.classList =
            "flex justify-between bg-base-100 border border-l-5 border-error p-6 rounded-[8px]";
        div.innerHTML = `<div class="left space-y-5">
                        <div class="heading space-y-1">
                            <h2
                                class="sub_title text-[18px] opacity-90 text-neutral text-[18px] font-semibold"
                            >
                                ${items.header}
                            </h2>
                            <p
                                class="text_1 text-neutral opacity-60 text-[16px]"
                            >
                                ${items.type}
                            </p>
                        </div>
                        <div
                            class="type flex text-neutral opacity-60 text-[14px] sm:text-[16px]"
                        >
                            <p class="place">${items.place}</p>
                            <ul class="list-disc list-outside pl-6 flex gap-7">
                                <li class="job_type">${items.JobType}</li>
                                <li class="salary">${items.salary}</li>
                            </ul>
                        </div>
                        <div class="apply space-y-2">
                            <div class="set_type  transition-all duration-300 ease-in-out">
                                <p
                                    class="apply_type bg-error/10 px-3 py-2 inline-block text-neutral/90 rounded-[8px] border border-error/20 font-medium"
                                >
                                    ${items.applyType}
                                </p>
                            </div>
                            <p class="description text-[14px] text-neutral/90">
                               ${items.description}
                            </p>
                        </div>
                        <div class="button flex gap-2">
                            <button
                                class="interview_btn btn btn-success btn-outline border-2"
                            >
                                INTERVIEW
                            </button>
                            <button
                                class="rejected_btn btn btn-error btn-outline border-2"
                            >
                                REJECTED
                            </button>
                        </div>
                    </div>
                    <div class="right">
                        <div
                            class="w-8 h-8 circle rounded-full border-2 border-base-300 cursor-pointer flex items-center justify-center"
                        >
                            <i
                                class="text-neutral/50 fa-regular fa-trash-can"
                            ></i>
                        </div>
                    </div>`;
        rejectedContainer.prepend(div);
    });
}
