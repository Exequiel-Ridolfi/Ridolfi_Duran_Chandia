
export default function TarjetasOng({Data}) {
  return (
    <div className='classTarjeta'>
      <>
      <h1><a  className='nombreclass' href={'/Localizacion/' + Data.id}>{Data.name}</a></h1>
      </>
    </div>
  );
}
