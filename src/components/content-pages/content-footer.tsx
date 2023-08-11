const ContentFooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer style={{width:'100%', position:'relative', bottom:0}}>
      <div className=" mx-0 py-12 flex flex-col md:flex-row justify-center items-center content-center gap-4 bg-black">
        <p className="text-white">&copy; {year} yourbrand.com</p>
      </div>
    </footer>
  );
};
export default ContentFooter;
