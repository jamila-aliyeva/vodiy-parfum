import Footer from "@/components/layout/front/footer";
import Header from "@/components/layout/front/header";
import Children from "@/types/children";
import React, { Fragment } from "react";

const PublicLayout = ({ children }: Children) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default PublicLayout;
