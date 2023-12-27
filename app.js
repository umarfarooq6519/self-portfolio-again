//styling buttons
const button_light = document.querySelectorAll("#button-light")
button_light.forEach(button => {
    button.classList.add("border", "border-[#352F44]", "px-4", "py-2", "rounded-lg","hover:bg-[#352F44]", "hover:text-[#F4EAE0]", "transition");
});

const button_dark = document.querySelectorAll("#button-dark")
button_dark.forEach(button => {
    button.classList.add("border", "border-[#352F44]", "px-4", "py-2", "rounded-lg","bg-[#352F44]", "text-[#F4EAE0]", "transition");
});