#!/usr/bin/env node
'use strict';

module.exports = isShit;

function isShit(anyShit) {
  return true;
}

if (isShit()) {
  console.log("Yes, this is shit.");
}
