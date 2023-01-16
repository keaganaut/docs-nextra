import fsPromises from "fs/promises";
import Link from "next/link";
import path from "path";
import { RedocStandalone } from "redoc";

export default function ApiReference(props) {
  return (
    <div>
      <div className="custom-nav-container sticky top-0 z-20 w-full bg-transparent">
        <nav className="h-12 bg-[#111] text-slate-50">
          <Link href="/"> Back </Link>
        </nav>
      </div>

      <main className="relative bg-white">
        <RedocStandalone spec={props.openApiSpec} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "./redoc/y42_openapi.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());

  return {
    props: { openApiSpec: objectData },
  };
}
