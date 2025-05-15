
import sum4438 from '../sum4438.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 16 to equal 37 + offset 0.01771248571170969', (t) => {
  assert.strictEqual(sum4438(21, 16), 37 + 0.01771248571170969);
});
