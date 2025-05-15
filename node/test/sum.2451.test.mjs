
import sum2451 from '../sum2451.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 7 to equal 56 + offset 0.5860068772913267', (t) => {
  assert.strictEqual(sum2451(49, 7), 56 + 0.5860068772913267);
});
