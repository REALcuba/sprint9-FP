
const Basketitem = (props) => {
  const deleteItem: React.FC = () => {
    const arrayWithoutItem = props.productList.filter(
      (item) => item.id !== props.id
    )
    props.setProducts(arrayWithoutItem)
  }
  return (
    <div className='basket-item'>
      <div className='basket-item-info'>
        <img src={props.image} alt='nevera' />

        <div className='item-info'>
          <h4>{props.itemName}</h4>
          <p>{props.ownerName}</p>
          <p>{props.pickupAddress}</p>
        </div>
      </div>
      <div className='item-action'>
        <button type='button' className='btn btn-danger' onClick={deleteItem}>
          Delete
        </button>
        <button type='button' className='btn btn-secondary'>
          Contact
        </button>
      </div>
    </div>
  )
}

export default Basketitem
