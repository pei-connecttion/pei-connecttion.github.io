import React from 'react';
import GlanceHover from '../GlanceHover.jsx';

export default function AboutGlance(block) {
  return (
    <section className="about-glance py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-header text-center mb-5">
              {block.title && <h2>{block.title}</h2>}
              {block.description && <p>{block.description}</p>}
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {block.glance_items && block.glance_items.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <GlanceHover
                width={item.width || '100%'}
                height={item.height || '300px'}
                background={item.background || '#f8f9fa'}
                borderRadius={item.borderRadius || '15px'}
                borderColor={item.borderColor || '#e9ecef'}
                glareColor={item.glareColor || '#ffffff'}
                glareOpacity={item.glareOpacity || 0.3}
                glareAngle={item.glareAngle || -45}
                glareSize={item.glareSize || 200}
                transitionDuration={item.transitionDuration || 600}
                playOnce={item.playOnce || false}
                className="h-100 d-flex align-items-center justify-content-center"
              >
                <div className="text-center p-4">
                  {item.icon && (
                    <div className="mb-3">
                      <i className={item.icon} style={{ fontSize: '2.5rem', color: item.iconColor || '#007bff' }}></i>
                    </div>
                  )}
                  {item.image && (
                    <div className="mb-3">
                      <img 
                        src={item.image} 
                        alt={item.image_alt || item.title} 
                        className="img-fluid"
                        style={{ maxWidth: '80px', height: 'auto' }}
                      />
                    </div>
                  )}
                  {item.title && <h4 className="mb-2">{item.title}</h4>}
                  {item.description && <p className="mb-0">{item.description}</p>}
                </div>
              </GlanceHover>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
