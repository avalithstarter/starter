const ContentFooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="max-w-7xl mx-auto py-12 flex flex-col md:flex-row justify-center items-center content-center gap-4">
        <p>&copy; {year} yourbrand.com</p>
      </div>
    </footer>
  );
};
export default ContentFooter;
