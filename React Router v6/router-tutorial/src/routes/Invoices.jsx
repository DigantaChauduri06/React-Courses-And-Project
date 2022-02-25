import { getInvoices } from "../data";
import {
  NavLink,
  Outlet,
  useSearchParams,
  useLocation,
  useParams,
  useNavigate,
} from "react-router-dom";

//styles
import "./Invoices.css";
export default function Invoices() {
  let invoices = getInvoices();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <input
          type="text"
          value={searchParams.get("filter") || ""}
          onChange={(e) => {
            let filter = e.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {invoices
          .filter((invoice) => {
            let quereyVal = searchParams.get("filter");
            if (!quereyVal) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(quereyVal.toLowerCase());
          })
          .map((invoice) => (
            <NavLink
              style={{ display: "block", margin: "1rem 0" }}
              to={`/invoices/${invoice.number}${location.search}`}
              state="Hello"
              key={invoice.number}
            >
              {invoice.name}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}
