
import sum2750 from '../sum2750.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 41 to equal 104 + offset 0.5639719182804156', (t) => {
  assert.strictEqual(sum2750(63, 41), 104 + 0.5639719182804156);
});
