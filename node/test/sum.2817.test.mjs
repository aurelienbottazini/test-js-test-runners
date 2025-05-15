
import sum2817 from '../sum2817.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 81 to equal 156 + offset 0.06928290391995617', (t) => {
  assert.strictEqual(sum2817(75, 81), 156 + 0.06928290391995617);
});
