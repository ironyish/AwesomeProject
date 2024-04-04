import { StyleSheet, Text, View, useState} from 'react-native'
import React from 'react'

export default function Test() {
    const [count, setCount] = useState(0);

  return (

    <View>
    <button>+</button>
    <button>{count}</button>
    <button>-</button>
    </View>
  )
}

const styles = StyleSheet.create({})