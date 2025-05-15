
import sum4301 from '../sum4301.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 16 to equal 41 + offset 0.038433717083947605', (t) => {
  assert.strictEqual(sum4301(25, 16), 41 + 0.038433717083947605);
});
