import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { BackgroundContainer, Button, Input, WidthMonitor } from "~/src/ui";
import { ContactCard } from "./components";
import "./Contact.scss";

export const Contact = () => {
  const navigate = useNavigate();

  return (
    <BackgroundContainer>
      <div className="Contact flex-column-center">
        <WidthMonitor className="flex-column">
          <span className="align-center">
            <ChevronLeft onClick={() => navigate(-1)} />
            <h2>Contact</h2>
          </span>
          <div className="Contact__form flex-column">
            <p>Fill out this form to contact me via email.</p>
            <form className="flex-column">
              <div className="flex">
                <span>
                  <label>Name</label>
                  <Input />
                </span>
                <span>
                  <label>Email</label>
                  <Input type="email" />
                </span>
              </div>
              <span>
                <label>Message</label>
                <Input textarea rows={8} />
              </span>
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </WidthMonitor>
        <ContactCard title={false} background={false} />
      </div>
    </BackgroundContainer>
  );
};
