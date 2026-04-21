import React from "react";
import ServiceCard from "./ServiceCard";
import todoService from "../../assets/service-todo.png";
import expenseService from "../../assets/service-expense.png";
import collaborateService from "../../assets/service-collaboration.png";

const serviceCard = [
  {
    svcId: 0o1,
    svcName: "Todo List",
    desc1:
      "Stay on top of your daily tasks with a smart, intuitive list manager designed to reduce mental clutter. Whether it's a quick grocery run or a  work milestone, our system helps you categorize and conquer your day. ",
    desc2:
      "The platform streamlines your workflow by syncronizing your lists across all devices in real-time. With built-in priority tagging and deadline reminders, we ensure that nothing falls through the cracks, allowing you to focus on execution rather than just organization",
    svcImg: todoService,
  },
  {
    svcId: 0o2,
    svcName: "Expense Tracker",
    desc1:
      "Financial clarity is the first step toward freedom. Our expense tracker allows you to log your spending on the go, categorize your purchases, and visualize where your money is actually going every month",
    desc2:
      "We take the 'manual' out of tracking. The platform provides automated spending reports and budget alerts that notify you when you're nearing your limits. By transforming raw numbers into easy-to-read charts, we help you make informed decisions to grow your savings effortlessly.",
    svcImg: expenseService,
  },
  {
    svcId: 0o3,
    svcName: "Chat and Collaborate",
    desc1:
      "Great ideas rarely happen in isolation. Our collaboration suite bridges the gap between communication and action, providing a shared space where teams can brainstorm, share files, and keep projects moving forward",
    desc2:
      "The platform eliminates fatigue by integrating your chats directly with your tasks. You can assign to-dos within a message and share documents securely. We provide a centralized hub that ensures everyone no matter where they are stays aligned on the same vision",
    svcImg: collaborateService,
  },
];

function Services() {
  return (
    <section className="our-services" id="services">
      <h1>What do we offer?</h1>
      <div className="services ">
        {serviceCard.map((card) => (
          <ServiceCard
            key={card.svcId}
            svcImg={card.svcImg}
            svcName={card.svcName}
            desc1={card.desc1}
            desc2={card.desc2}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
