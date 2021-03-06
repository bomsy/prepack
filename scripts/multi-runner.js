/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/* @flow */
// This file just runs the 4 test runners in one file for coverage
require("./test-residual.js");

require("./test-runner.js");

require("./generate-sourcemaps-test.js");

require("./test-error-handler.js");
