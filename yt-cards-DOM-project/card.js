const mainContainer = document.querySelector('.main-container');

// Create new .card element
const newItem = document.createElement('div');
newItem.className = 'card';
newItem.innerHTML = `
                  <div class="left-section">
            <img src="images/thumb-1.avif" alt="">
            <div class="duration">5:00</div>
        </div>

        <div class="right-section">
            <div class="vid-title">Video Title</div>
            <div class="vid-stats"> 
                <span class="channel-name">CoDicWorld &#183;</span>
                <span class="views">1.2M views &#183;</span>
                <span class="date">1 week ago</span>
            </div>
        </div>
    `;

// Insert before the first .card (i.e., at the top)
const firstItem = mainContainer.querySelector('.card');
mainContainer.insertBefore(newItem, firstItem);