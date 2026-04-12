import Button from "../../utils/Button";
import todoService from "../../assets/service-todo.png";

function ServiceCard() {
  return (
    <div className="service-card">
      <img src={todoService} alt="To-do List Service" className="service-img" />

      <h3>Service Name</h3>
      <p>
        A little about it: Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Numquam, excepturi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quae!
        Minima, accusantium. In voluptatem delectus officiis vitae labore soluta
        itaque repudiandae vel, temporibus amet inventore ipsam fuga veniam
        consequatur nemo fugiat rem aspernatur ut magnam saepe nam rerum qui
        ratione!
      </p>
      <Button content="Explore this feature" className="service-btn"/>
    </div>
  );
}

export default ServiceCard;
