import classes from "./Modal.module.css";
import Card from "../UI/Card";

const Modal = (props) => {
  // const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <button>Okay</button>
        </footer>
      </Card>
    </div>
    // <div className={showHideClassName}>
    //   <section className="modal-main container mx-auto">
    //     {children}
    //     <button
    //       type="button"
    //       onClick={handleClose}
    //       className="bg-purple-700 absolute bottom-0 right-0"
    //     >
    //       Close
    //     </button>
    //   </section>
    // </div>
  );
};

export default Modal;
