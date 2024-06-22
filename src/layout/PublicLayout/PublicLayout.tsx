import { Outlet } from "react-router-dom";
import classes from "./PublicLayout.module.scss";
import Nav from "@/components/Nav/Nav";

const PublicLayout = () => {
  return (
    <div className={classes.publicLayout}>
      <div className="container">
        <header className="border-bottom lh-1 py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              <a className="link-secondary" href="#">
                Subscribe
              </a>
            </div>
            <div className="col-4 text-center">
              <a
                className="blog-header-logo text-body-emphasis text-decoration-none"
                href="#"
              >
                Large
              </a>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <a className="link-secondary" href="#" aria-label="Search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="mx-3"
                  role="img"
                  viewBox="0 0 24 24"
                >
                  <title>Search</title>
                  <circle cx="10.5" cy="10.5" r="7.5"></circle>
                  <path d="M21 21l-5.2-5.2"></path>
                </svg>
              </a>
              <a className="btn btn-sm btn-outline-secondary" href="#">
                Sign up
              </a>
            </div>
          </div>
        </header>
        <Nav />
      </div>
      <main className={classes.main}>
        <Outlet />
      </main>
      <footer className="py-5 text-center text-body-secondary bg-body-tertiary">
        <p>
          Blog template built for{" "}
          <a href="https://getbootstrap.com/">Bootstrap</a> by{" "}
          <a href="https://twitter.com/mdo">@mdo</a>.
        </p>
        <p className="mb-0">
          <a href="#">Back to top</a>
        </p>
      </footer>
    </div>
  );
};

export default PublicLayout;
