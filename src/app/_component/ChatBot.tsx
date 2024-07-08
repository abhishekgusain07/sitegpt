import React from 'react';
import '../chatbot.css'

const ChatComponent: React.FC = () => {
  return (
    <div className="cc-1yy0g cc-1wive cc-vibqn">
      <div 
        className="cc-1no03" 
        data-visible="true" 
        data-chat-status="initial" 
        data-animate-minimize="false" 
        data-animate-maximize="false" 
        style={{ width: '320px' }}
      >
        <div className="cc-lso1a">
          <div 
            className="cc-1gpay cc-1kgzy" 
            data-mode="chat" 
            data-helpdesk-collapsed="false" 
            data-overflow="false" 
            data-tile="diagonal-lines"
          >
            <span className="cc-9yaqp">
              <a 
                data-mode="chat" 
                className="cc-3yw77 cc-hshc7 cc-coh7k cc-1cx9a" 
                tabIndex={0} 
                role="button"
              >
                <span className="cc-ytg1n cc-5t1tm"></span>
                <span className="cc-1ksvp cc-361jl cc-co79q">Chat</span>
              </a>
            </span>
            <div className="cc-1rcek">
              <span className="cc-nnv0m">
                <span className="cc-1ldye">
                  <span className="cc-1ytij cc-8mq05 cc-gge6o cc-1i61z">
                    <span 
                      className="cc-1c56v cc-o92tn" 
                      style={{
                        backgroundImage: "url('https://image.crisp.chat/process/thumbnail/?url=https%3A%2F%2Fstorage.crisp.chat%2Fusers%2Favatar%2Foperator%2Fd50b0d915318e000%2Flinkedin-photo_1j11tbi.png&width=120&height=120&1720102899981')"
                      }}
                    ></span>
                    <span className="cc-xl8y3 cc-1k14q cc-1re4b cc-17mdu">
                      <span className="cc-sz5r6 cc-ou7h7 cc-olo99">Bhanu</span>
                    </span>
                  </span>
                  <span className="cc-1ytij cc-8mq05 cc-gge6o cc-1i61z">
                    <span 
                      className="cc-1c56v cc-o92tn" 
                      style={{
                        backgroundImage: "url('https://image.crisp.chat/avatar/website/e9a7e106-c3f5-4bcd-9419-8cdb2cf50197/120/?1720102899981')"
                      }}
                    ></span>
                  </span>
                  <span className="cc-6vag1"></span>
                </span>
              </span>
              <span className="cc-1g7tp">
                <span className="cc-1ffwy">
                  <span className="cc-raag8 cc-co79q cc-361jl">Questions? Chat with me!</span>
                  <span className="cc-n9u8u">
                    <span data-type="away" className="cc-1lwlj cc-co79q">
                      <span className="cc-pprhn cc-co79q cc-olo99">Was last active 04/07/2024</span>
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <span className="cc-1euts cc-1swm7">
              <span className="cc-9nfaa cc-17cww" tabIndex={0} role="button" aria-label="Close chat">
                <span className="cc-oktsw cc-5t1tm"></span>
              </span>
            </span>
          </div>
          <span className="cc-7rwgc"></span>
        </div>
        {/* Additional chat component content */}
      </div>
    </div>
  );
};

export default ChatComponent;