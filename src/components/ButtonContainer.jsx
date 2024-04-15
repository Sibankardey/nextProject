import React from 'react'
import styles from '@/app/calculator/calculator.module.css'
const ButtonContainer = () => {
    const ButtonList = ["AC","+","-","*","/",".","1","2","3","4","5","6","7","8","9","0","00","="]
  return (
    <>
    <div className={styles.buttonContainer}>
    {
        ButtonList.map((item) => <button>{item}</button>
        )
    }
      </div>
    </>
  )
}

export default ButtonContainer
