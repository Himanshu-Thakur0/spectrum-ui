"use client";
import React, { useEffect, useState } from "react";
import { P } from "@/components/ui/heading-with-anchor";
import { InlineCode } from "@/components/ui/inline-code";

const YearDropdownDesc = () => {
  const [thisYear, setThisYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setThisYear(new Date().getFullYear());
  }, []);
  return (
    <>
      {" "}
      <P className="text-muted-foreground">
        The year range will be: <InlineCode>this year + yearRange</InlineCode>{" "}
        and <InlineCode>this year - yearRange</InlineCode>.
      </P>
      <P className="text-muted-foreground">Default is 50.</P>
      <P className="text-muted-foreground">
        For example: This year is {thisYear}, The year dropdown will be{" "}
        {thisYear - 50} to {thisYear + 50} which is generated by{" "}
        <InlineCode>
          {thisYear} - 50 = {thisYear - 50}
        </InlineCode>{" "}
        and{" "}
        <InlineCode>
          {thisYear} + 50 = {thisYear + 50}
        </InlineCode>
        .
      </P>
    </>
  );
};

export default YearDropdownDesc;
