// Counter
 // Counter function
 function startCounting(categoryCounter, endValue) {
    let currentCount = 0;
    const interval = setInterval(() => {
      categoryCounter.innerText = currentCount;
      currentCount++;
      if (currentCount > endValue) {
        clearInterval(interval);
      }
    }, 50);
  }

  // Start counting for each category
  const category1Counter = document.getElementById('category1Counter');
  const category2Counter = document.getElementById('category2Counter');
  const category3Counter = document.getElementById('category3Counter');
  const category4Counter = document.getElementById('category4Counter');

  startCounting(category1Counter, 200); // Change 100 to the desired end value for Category 1
  startCounting(category2Counter, 200); // Change 200 to the desired end value for Category 2
  startCounting(category3Counter, 300); // Change 300 to the desired end value for Category 3
  startCounting(category4Counter, 400); // Change 400 to the desired end value for Category 4



