
import sum2110 from '../sum2110.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 7 to equal 90 + offset 0.4431969766346685', (t) => {
  assert.strictEqual(sum2110(83, 7), 90 + 0.4431969766346685);
});
