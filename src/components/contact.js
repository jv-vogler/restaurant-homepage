import { createEl } from "./utils";

export default function Contact() {
  const wrapper = createEl({
    elTag: "section",
    elClasses: ["main-wrapper", "main-wrapper--contact"],
  });

  const contactHeading = createEl({
    elTag: "div",
    elClasses: "contact-heading",
  });

  contactHeading.appendChild(createEl({ elTag: "h2", elTxt: "Contact Us", dataAttr: { key: "contact--header"}}));
  contactHeading.appendChild(
    createEl({
      elTag: "p",
      elTxt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem at cupiditate cumque aperiam \
        eum aspernatur culpa deleniti, velit quaerat expedita quos. Distinctio quasi qui eveniet?",
      dataAttr: { key: "contact--paragraph" }
    })
  );

  const container = createEl({ elTag: "div", elClasses: "contact-container" });

  const contactInfo = createEl({ elTag: "div", elClasses: "contact-info" });
  contactInfo.appendChild(
    createBox(
      "Address",
      "1520  Av. Paulista,<br>São Paulo, São Paulo<br>01310-200",
      '<i class="fa fa-map-marker" aria-hidden="true"></i>',
      "contact--address"
    )
  );
  contactInfo.appendChild(
    createBox(
      "Phone",
      "+55 (11)98765-4321",
      '<i class="fa fa-phone" aria-hidden="true"></i>',
      "contact--phone"
    )
  );
  contactInfo.appendChild(
    createBox(
      "Email",
      "sushi@oasis.com",
      '<i class="fa-regular fa-envelope" aria-hidden="true"></i>',
      "contact--email"
    )
  );

  const formContainer = createEl({ elTag: "div", elClasses: "contact-form" });
  formContainer.appendChild(createForm());

  container.appendChild(contactInfo);
  container.appendChild(formContainer);

  wrapper.append(contactHeading, container);
  return wrapper;
}

function createBox(hText, pText, iContent, dAttr) {
  const box = createEl({ eltag: "div", elClasses: "contact--box" });

  const icon = createEl({ elTag: "div", elClasses: "contact--icon" });
  icon.innerHTML = iContent;

  const text = createEl({ elTag: "div", elClasses: "contact--text" });
  text.appendChild(createEl({ elTag: "h3", elTxt: `${hText}`, dataAttr: { key: `${dAttr}`} }));
  text.appendChild(createEl({ elTag: "p", elHTML: `${pText}` }));

  box.append(icon, text);
  return box;
}

function createForm() {
  const form = createEl({ elTag: "form" });
  const h = createEl({ elTag: "h2", elTxt: "Send Message", dataAttr: { key: "contact--send-msg" } });
  const field1 = createEl({ elTag: "div", elClasses: "inputBox" });
  const field2 = createEl({ elTag: "div", elClasses: "inputBox" });
  const field3 = createEl({ elTag: "div", elClasses: "inputBox" });
  const field4 = createEl({ elTag: "div", elClasses: "inputBox" });
  let input;

  input = createEl({ elTag: "input" });
  input.setAttribute("type", "text");
  input.setAttribute("required", "required");
  field1.appendChild(input);
  field1.appendChild(createEl({ elTag: "span", elTxt: "Full Name", dataAttr: { key: "contact--full-name" } }));

  input = createEl({ elTag: "input" });
  input.setAttribute("type", "text");
  input.setAttribute("required", "required");
  field2.appendChild(input);
  field2.appendChild(createEl({ elTag: "span", elTxt: "Email" }));

  input = createEl({ elTag: "textarea" });
  input.setAttribute("required", "required");
  field3.appendChild(input);
  field3.appendChild(createEl({ elTag: "span", elTxt: "Enter your message", dataAttr: { key: "contact--enter-msg" } }));

  input = createEl({ elTag: "input", elClasses: "form-btn", dataAttr: { key: "contact--btn-txt" } });
  input.setAttribute("type", "submit");
  input.setAttribute("value", "send");
  field4.appendChild(input);

  form.append(h, field1, field2, field3, field4);
  return form;
}
