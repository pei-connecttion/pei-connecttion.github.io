export default function FeatureCarousel({ title = "Feature Carousel", image = "", items = [], ...props }) {
  // Default items if none provided
  const defaultItems = [
    {
      title: "Placeholder Feature 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/images/minutes/feature-card-one.png",
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
            width: 90%;
            max-width: 1200px; /* expand max width to occupy more of the page */
            margin: 0 auto;
          }

          .demo-carousel-content-wrapper {
            position: relative;
            overflow: hidden;
            border: 1px solid #555;
            border-radius: 24px;
            padding: 40px; /* increased vertical padding for taller appearance */
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
            min-height: 480px; /* increased height so it appears much taller */
            padding: 0;
            gap: 24px;
          }

          .demo-carousel-item-image {
            flex: 0 0 35%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .demo-carousel-item-image img {
            width: 100%;
            height: auto;
            max-width: 480px; /* allow a much larger image for taller layout */
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

          /* small nav buttons: transparent when inactive, using active color for text/border */
          .demo-carousel-nav-button {
            background: transparent; /* no bg when inactive */
            color: #009fba; /* active color text when inactive */
            border: 2px solid #009fba; /* active color border when inactive */
            border-radius: 28px;
            padding: 10px 18px;
            font-size: 14px;
            font-weight: 700;
            cursor: pointer;
            transition: transform .12s ease, background .12s ease, color .12s ease, border-color .12s ease;
            white-space: nowrap;
          }

          .demo-carousel-nav-button:hover,
          .demo-carousel-nav-button:focus {
            transform: translateY(-1px);
            background: #009fba; /* main color on hover */
            color: #ffffff;
            border-color: #009fba;
            outline: none;
          }

          .demo-carousel-nav-button.active {
            background: #009fba; /* active uses main color */
            color: #ffffff;
            border-color: #009fba;
          }
          .demo-carousel-image-link { display: inline-block; }
          .demo-carousel-image-link img { cursor: pointer; display: block; }
          .demo-carousel-image-link:hover { text-decoration: none; }
          /* Button-like title link to match design */
          .demo-carousel-title-link {
            display: inline-block;
            background: #009fba; /* main teal */
            color: #fff;
            padding: 12px 36px;
            border-radius: 28px;
            font-weight: 800;
            text-decoration: none;
            box-shadow: none;
            transition: transform .12s ease, opacity .12s ease, background .12s ease, color .12s ease, border-color .12s ease;
            border: 2px solid transparent;
          }
          .demo-carousel-title-link:hover,
          .demo-carousel-title-link:focus {
            transform: translateY(-1px);
            opacity: 1;
            text-decoration: none;
            background: #ffffff; /* white on hover */
            color: #009fba; /* teal text on hover */
            border-color: #009fba;
          }
          .demo-carousel-title-link:focus {
            outline: none;
            box-shadow: 0 0 0 4px rgba(0,159,186,0.12);
          }

          /* Responsive Design */
          @media (max-width: 992px) {
            .demo-carousel-container {
              width: 95%;
            }
            .demo-carousel-content-wrapper {
              padding: 30px;
            }
            .demo-carousel-item {
              min-height: 400px;
              gap: 20px;
            }
            .demo-carousel-item-image {
              flex: 0 0 40%;
            }
            .demo-carousel-item-image img {
              max-width: 400px;
            }
            .demo-carousel-item-title {
              font-size: 22px;
            }
            .demo-carousel-item-description {
              font-size: 15px;
            }
          }

          @media (max-width: 768px) {
            .demo-carousel-container {
              width: 98%;
            }
            .demo-carousel-content-wrapper {
              padding: 20px;
            }
            .demo-carousel-item {
              flex-direction: column;
              min-height: auto;
              gap: 20px;
              text-align: center;
            }
            .demo-carousel-item-image {
              flex: none;
              width: 100%;
              max-width: 300px;
              margin: 0 auto;
            }
            .demo-carousel-item-image img {
              max-width: 100%;
            }
            .demo-carousel-item-content {
              padding: 20px 0 0 0;
            }
            .demo-carousel-item-title {
              font-size: 20px;
              margin-bottom: 16px;
            }
            .demo-carousel-item-description {
              font-size: 14px;
            }
            .demo-carousel-nav-btn {
              width: 35px;
              height: 35px;
              font-size: 14px;
            }
            .demo-carousel-prev-btn {
              left: 5px;
            }
            .demo-carousel-next-btn {
              right: 5px;
            }
            .demo-carousel-navigation-buttons {
              margin-top: 15px;
            }
            .demo-carousel-nav-button {
              padding: 8px 14px;
              font-size: 12px;
            }
            .demo-carousel-title-link {
              padding: 10px 24px;
              font-size: 14px;
            }
          }

          @media (max-width: 576px) {
            .demo-carousel-section {
              padding: 0 0 60px 0;
            }
            .demo-carousel-content-wrapper {
              padding: 15px;
              border-radius: 16px;
            }
            .demo-carousel-item {
              gap: 15px;
            }
            .demo-carousel-item-image {
              max-width: 250px;
            }
            .demo-carousel-item-title {
              font-size: 18px;
              margin-bottom: 12px;
            }
            .demo-carousel-item-description {
              font-size: 13px;
              line-height: 1.5;
            }
            .demo-carousel-nav-btn {
              width: 32px;
              height: 32px;
              font-size: 12px;
            }
            .demo-carousel-navigation-buttons {
              gap: 8px;
              margin-top: 12px;
            }
            .demo-carousel-nav-button {
              padding: 6px 12px;
              font-size: 11px;
              border-radius: 20px;
            }
            .demo-carousel-title-link {
              padding: 8px 20px;
              font-size: 13px;
              border-radius: 20px;
            }
          }

          @media (max-width: 400px) {
            .demo-carousel-item-image {
              max-width: 200px;
            }
            .demo-carousel-item-title {
              font-size: 16px;
            }
            .demo-carousel-item-description {
              font-size: 12px;
            }
            .demo-carousel-nav-button {
              padding: 5px 10px;
              font-size: 10px;
            }
            .demo-carousel-title-link {
              padding: 6px 16px;
              font-size: 12px;
            }
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
                          <img src={item.image || image} alt={item.title} />
                        </div>
                        <div className="demo-carousel-item-content">
                        <div className="demo-carousel-item-title"><a href={item.link || '#'} target="_blank" className="demo-carousel-title-link">{item.title}</a></div>
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
