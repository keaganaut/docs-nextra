export const HelpWidget = () => {
  return (
    <section className="relative">
      <div className="fixed top-4 right-4 z-50 flex max-h-[1/3] w-96 flex-col rounded-xl bg-gray-200 shadow-md">
        <div className="flex w-full items-baseline border-b border-gray-400 p-4 text-primary">
          Help - Get Started - Build a basic pipeline
        </div>
        <div className="space-y-2 p-4">
          <span className="font-medium text-primary">
            Build a basic pipeline
          </span>
          <div className="mb-4 h-8 w-full rounded-md border border-gray-500"></div>
          <div className="mb-2 flex w-full flex-col rounded-md border border-gray-400 p-2">
            <span className="mb-1 font-medium text-primary">
              Commit changes
            </span>

            <iframe
              className="overflow-hidden rounded-sm"
              src="https://scribehow.com/embed/How_to_Add_a_CSV_Integration__Y1N8LFPlQcO-DhkCg9f7tQ?removeLogo=true"
              width="100%"
              height="540"
              allowFullScreen
            ></iframe>
            {/* <iframe
              src="https://scribehow.com/embed/Y42_Bottom_Drawer_w_Materialisation_and_DAG__cdOOiAVjQrWUJvmFIeb3Zw?removeLogo=true"
              width="100%"
              height="480"
              allowFullScreen
            ></iframe> */}
          </div>
          <div className="mt-2">
            <button className="mr-2 rounded-md bg-purple-400 py-2 px-4 font-semibold">
              Commit changes
            </button>
            <button className="rounded-md border-gray-400  bg-gray-300 py-2 px-4 font-semibold">
              Mark as done
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
