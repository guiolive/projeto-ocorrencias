const imgURL = "https://files.cercomp.ufg.br/weby/up/900/o/banner_cameras_sdh_nuvemb.jpg?1568917178";
 
function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <img src={imgURL} alt="home gif" className="page-img" />
    </div>
  );
}
 
export default HomePage;