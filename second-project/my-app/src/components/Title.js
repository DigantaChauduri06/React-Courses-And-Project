import "../css/Title.css";
export default function Title({ title, subtitle }) {
  return (
    <>
      <div className="Events">
        <h1 className="title">{title}</h1>
        <h3 className="sub-title">{subtitle}</h3>
      </div>
    </>
  );
}
