
import sum1549 from '../sum1549.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 36 to equal 124 + offset 0.7244433192579596', (t) => {
  assert.strictEqual(sum1549(88, 36), 124 + 0.7244433192579596);
});
