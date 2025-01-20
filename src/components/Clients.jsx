import React from 'react'


const Clients = () => {
    const partners = [
        'TailShift', 'LightBox', 'FeatherDev', 'Spherule', 'GlobalBank', 'Nietzsche'
      ];
    
      return (
        <div className="container py-5">
          <div className=" row justify-content-center align-items-center g-4">
            {partners.map((partner, index) => (
              <div key={index} xs={6} md={2} className="col-6 col-md text-center">
                <img 
                  src={`src/assets/Fictional company logo${index+1}.png`}
                  alt={partner}
                  className="img-fluid opacity-75"
                  style={{ maxHeight: '32px' }}
                />
              </div>
            ))}
          </div>
        </div>
      );
}

export default Clients
