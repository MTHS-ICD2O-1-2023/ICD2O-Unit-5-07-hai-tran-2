// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Hai Tran
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"


function calculateSumOfNNumbers() {
  // input
  let numberAddingTo = parseFloat(document.getElementById("number-adding-to").value)
  let sumOfNNumber = 0

  // process
  for (let counter = 0; counter <= numberAddingTo; counter++) {
    // output
    sumOfNNumber = sumOfNNumber + counter
    document.getElementById("result").innerHTML = "The sum of two number is " + sumOfNNumber
  }
}