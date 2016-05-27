#!/usr/bin/env bash

set -ex -o pipefail

echo 'travis_fold:start:TEST'

echo 'travis_fold:start:test.run'
gulp test
echo 'travis_fold:end:test.run'

echo 'travis_fold:end:TEST'
