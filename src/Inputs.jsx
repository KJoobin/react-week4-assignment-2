export default function Inputs({ onChangeName, onChangeCategory, onChangeAddress }) {
  function handleChangeRestaurantName(event) {

  }

  function handleChangeRestaurantCategory(event) {

  }

  function handleChangeRestaurantAddress(event) {

  }

  return (
    <div>
      <input
        id="input-restaurant-name"
        type="text"
        placeholder="이름"
        onChange={handleChangeRestaurantName}
      />
      <input
        id="input-restaurant-category"
        type="text"
        placeholder="분류"
        onChange={handleChangeRestaurantCategory}
      />
      <input
        id="input-restaurant-address"
        type="text"
        placeholder="주소"
        onChange={handleChangeRestaurantAddress}
      />
    </div>
  );
}
