
import sum1293 from '../sum1293.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 7 to equal 93 + offset 0.4446413217583933', (t) => {
  assert.strictEqual(sum1293(86, 7), 93 + 0.4446413217583933);
});
