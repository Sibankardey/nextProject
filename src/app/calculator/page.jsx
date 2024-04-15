import React from 'react'
import Heading from '@/components/heading'
import Input from '@/components/Input'
import styles from '@/app/calculator/calculator.module.css'
import ButtonContainer from '@/components/ButtonContainer'
const page = () => {
  return (
    <div>
        <Heading heading="Calculator"/>
        <div className={styles.calculatorContainer}>
          <Input/>
          <ButtonContainer/>
        </div>
    </div>
  )
}

export default page
