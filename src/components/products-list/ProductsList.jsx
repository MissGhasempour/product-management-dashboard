export default function ProductsList({data}) {
  return (
    <div>
      <div className="m-8">
        <img src="#" alt="product" />
        <h1>{data.countries[0].name} </h1>
        <p>cost</p>
        <p>isExisting</p>
        <p>***** 5</p>
      </div>
    </div>
  );
}
