import Layout from "@/components/dashboard/Layout";

const create = () => {
  return (
    <Layout>
      <div className="flex w-full justify-center">
        <div className="flex w-full max-w-screen-xl justify-center pt-12">
          <div className="text-center font-tt text-5xl uppercase">
            feedback <br /> request
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default create;
