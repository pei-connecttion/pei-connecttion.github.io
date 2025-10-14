export default function FeatureCarousel({ title = "Feature Carousel", image = "", items = [], ...props }) {
  // Default items if none provided
  const defaultItems = [
    {
      title: "Placeholder Feature 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/images/feature/feature-card-one.png",
      link: "/"
    },
  ];

  const carouselItems = items.length > 0 ? items : defaultItems;
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Carousel Demo Styles - Inline to avoid conflicts */
          .demo-carousel-section {
            padding: 0 0 80px 0;
          }

          .demo-carousel-container {
            position: relative;
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
          }

          .demo-carousel-content-wrapper {
            position: relative;
            overflow: hidden;
            border: 1px solid #555;
            border-radius: 24px;
            padding: 20px;
          }

          .demo-carousel-track {
            display: flex;
            transition: transform 0.3s ease-in-out;
            width: 100%;
          }

          .demo-carousel-item {
            width: 100%;
            flex-shrink: 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            min-height: 280px;
            padding: 0;
            gap: 20px;
          }

          .demo-carousel-item-image {
            flex: 0 0 40%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .demo-carousel-item-image img {
            width: 100%;
            height: auto;
            max-width: 200px;
            border-radius: 12px;
          }

          .demo-carousel-nav-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(0, 0, 0, 0.1);
            border: 1px solid #ccc;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            cursor: pointer;
            transition: all 0.3s ease;
            z-index: 10;
          }

          .demo-carousel-nav-btn:hover {
            background-color: rgba(0, 0, 0, 0.2);
            border-color: #333;
            transform: translateY(-50%) scale(1.1);
          }

          .demo-carousel-prev-btn {
            left: 10px;
          }

          .demo-carousel-next-btn {
            right: 10px;
          }

          .demo-carousel-item-content {
            flex: 1;
            padding: 24px;
            padding-left: 0;
          }

          .demo-carousel-item-title {
            margin-bottom: 12px;
            font-weight: 900;
            font-size: 24px;
          }

          .demo-carousel-item-description {
            font-size: 16px;
            line-height: 1.6;
          }

          .demo-carousel-navigation-buttons {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
            margin-top: 20px;
          }

          .demo-carousel-nav-button {
            background-color: rgba(0, 0, 0, 0.1);
            border: 1px solid #ccc;
            border-radius: 25px;
            padding: 10px 16px;
            font-size: 14px;
            cursor: pointer;
            transition: all 0.3s ease;
            white-space: nowrap;
          }

          .demo-carousel-nav-button:hover {
            background-color: rgba(0, 0, 0, 0.2);
            border-color: #333;
          }

          .demo-carousel-nav-button.active {
            background-color: #333;
            color: #fff;
            border-color: #333;
          }
        `
      }} />
      
      <section className="demo-carousel-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="demo-carousel-container">
                <div className="demo-carousel-content-wrapper">
                  <button className="demo-carousel-nav-btn demo-carousel-prev-btn" id="demoPrevBtn">
                    <i className="ph ph-caret-left"></i>
                  </button>
                  <button className="demo-carousel-nav-btn demo-carousel-next-btn" id="demoNextBtn">
                    <i className="ph ph-caret-right"></i>
                  </button>
                  <div className="demo-carousel-track" id="demoCarouselTrack">
                    {carouselItems.map((item, index) => (
                      <div key={index} className="demo-carousel-item">
                        <div className="demo-carousel-item-image">
                          <img src={image} alt={item.title} />
                        </div>
                        <div className="demo-carousel-item-content">
                          <div className="demo-carousel-item-title">{item.title}</div>
                          <p className="demo-carousel-item-description">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="demo-carousel-navigation-buttons">
                  {carouselItems.map((item, index) => (
                    <button key={index} className={`demo-carousel-nav-button ${index === 0 ? 'active' : ''}`} data-slide={index}>
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              // Use a timeout to ensure React has rendered all items
              setTimeout(function() {
                const track = document.getElementById('demoCarouselTrack');
                const navButtons = document.querySelectorAll('.demo-carousel-nav-button');
                const items = document.querySelectorAll('.demo-carousel-item');
                const prevBtn = document.getElementById('demoPrevBtn');
                const nextBtn = document.getElementById('demoNextBtn');
                let currentIndex = 0;
                
                console.log('Carousel items found:', items.length);
                console.log('Nav buttons found:', navButtons.length);
                
                function showSlide(index) {
                  // Re-query items to make sure we have all of them
                  const currentItems = document.querySelectorAll('.demo-carousel-item');
                  const currentNavButtons = document.querySelectorAll('.demo-carousel-nav-button');
                  
                  currentNavButtons.forEach((button, i) => {
                    button.classList.toggle('active', i === index);
                  });
                  
                  const offset = -index * 100;
                  if (track) track.style.transform = \`translateX(\${offset}%)\`;
                  currentIndex = index;
                }
                
                function nextSlide() {
                  const currentItems = document.querySelectorAll('.demo-carousel-item');
                  const nextIndex = (currentIndex + 1) % currentItems.length;
                  showSlide(nextIndex);
                }
                
                function prevSlide() {
                  const currentItems = document.querySelectorAll('.demo-carousel-item');
                  const prevIndex = (currentIndex - 1 + currentItems.length) % currentItems.length;
                  showSlide(prevIndex);
                }
                
                navButtons.forEach((button, index) => {
                  button.addEventListener('click', () => {
                    console.log('Nav button clicked:', index);
                    showSlide(index);
                  });
                });
                
                if (nextBtn) nextBtn.addEventListener('click', nextSlide);
                if (prevBtn) prevBtn.addEventListener('click', prevSlide);
                
                // Initialize first slide
                showSlide(0);
              }, 100);
            });
          `
        }} />
      </section>
    </>
  );
}
