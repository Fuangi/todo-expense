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
      "A little about it: Lorem ipsum dolor sit amet consectetur adipisicingelit. Numquam, excepturi.",
    desc2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quae! Minima, accusantium. In voluptatem delectus officiis vitae labore solutaitaque repudiandae vel, temporibus amet inventore ipsam fuga veniam consequatur nemo fugiat rem aspernatur ut magnam saepe nam rerum qui ratione!",
    svcImg: todoService,
  },
  {
    svcId: 0o2,
    svcName: "Expense Tracker",
    desc1:
      "A little about it: Lorem ipsum dolor sit amet consectetur adipisicingelit. Numquam, excepturi",
    desc2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quae! Minima, accusantium. In voluptatem delectus officiis vitae labore solutaitaque repudiandae vel, temporibus amet inventore ipsam fuga veniam consequatur nemo fugiat rem aspernatur ut magnam saepe nam rerum qui ratione!",
    svcImg: expenseService,
  },
  {
    svcId: 0o3,
    svcName: "Chat and Collaborate",
    desc1:
      "A little about it: Lorem ipsum dolor sit amet consectetur adipisicingelit. Numquam, excepturi",
    desc2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quae! Minima, accusantium. In voluptatem delectus officiis vitae labore solutaitaque repudiandae vel, temporibus amet inventore ipsam fuga veniam consequatur nemo fugiat rem aspernatur ut magnam saepe nam rerum qui ratione!",
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
