
function Btn({massage}) {
     const lalala = () => {
    alert(massage)
  }
    return (
        <button onClick={lalala} >Кнопка</button>
    )
    
}

export default Btn