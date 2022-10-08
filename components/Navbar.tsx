// .tsx for component files, .ts for pure typescript files
import React, { FC, useState } from "react";
// nextjs
import Image from "next/image";
import Link from "next/link";

// materialui
import { AppBar, Toolbar, Stack, Button } from "@mui/material";
import { useRouter } from "next/router";

const Navbar: FC = () => {
  const router = useRouter();
  const activeElement = router.pathname;

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Link href="/">
            <Image
              id="logo"
              src="/FOODAPP_logo.png"
              width="100px"
              height="100px"
            ></Image>
          </Link>
          <Stack direction="row">
            <Link href="/">
              <Button
                color="secondary"
                className={activeElement === "/" ? "active" : ""}
              >
                Home
              </Button>
            </Link>
            <Link href="/recipes">
              <Button
                color="secondary"
                className={activeElement === "/recipes" ? "active" : ""}
              >
                Recipes
              </Button>
            </Link>
            <Link href="about">
              <Button
                color="secondary"
                className={activeElement === "/about" ? "active" : ""}
              >
                About
              </Button>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

// export async function getServerSideProps(context: any) {
//   // console.log(context.query )
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }

export default Navbar;
