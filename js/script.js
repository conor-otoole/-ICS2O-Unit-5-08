// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: conor-otoole
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/-ICS2O-Unit-5-08/sw.js", {
    scope: "/-ICS2O-Unit-5-08/",
  })
}

/**
 * This function displays an alert.
 */

function myButtonClicked() {
  var numberB = parseFloat(document.getElementById("denomenator").value)
  var numberA = parseFloat(document.getElementById("numerator").value)
  var counter = 0
  var remainder = numberA

  while (remainder >= numberB) {
    remainder = remainder - numberB
    counter++
  }
  document.getElementById("hello-world").innerHTML =
    "Your answer is  " + counter + " and a remainder of " + remainder + "."
}