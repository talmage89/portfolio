import * as React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { BackgroundContainer, Button, Input, WidthMonitor } from "~/src/ui";
import { ContactCard } from "./components";
import "./Contact.scss";

type ContactProps = {};

type FormData = {
  name: string;
  email: string;
  message: string;
};

const FormDataDefaults = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props: ContactProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState<FormData>(FormDataDefaults);

  const formSubmit = () => {
    console.log("form submitted");
  };

  return (
    <BackgroundContainer>
      <div className="Contact flex-column-center">
        <WidthMonitor className="flex-column">
          <span className="align-center">
            <FontAwesomeIcon icon={faArrowLeft} onClick={() => navigate(-1)} />
            <h2>Contact</h2>
          </span>
          <div className="Contact__form flex-column">
            <p>Fill out this form to contact me via email.</p>
            <form className="flex-column" onSubmit={() => formSubmit()}>
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
