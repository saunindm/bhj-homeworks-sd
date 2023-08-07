const rotatorCase = document.querySelectorAll('.rotator__case');
const array = Array.from(rotatorCase);
const isActive = (element) => {return element.classList.contains('rotator__case_active')};

rotator = () => {
    setActiveElements = (index) => {
        array.forEach((item, i) => {
            item.classList.toggle('rotator__case_active', i === index);
        }) 
    };
    
    setInterval(() => {
        let currentIndex = array.findIndex(isActive);;
        currentIndex = (currentIndex + 1) % array.length;
        setActiveElements(currentIndex);
    }, 1000)
}

rotator();