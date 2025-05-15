
import sum1406 from '../sum1406.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 43 to equal 125 + offset 0.2556494461987685', (t) => {
  assert.strictEqual(sum1406(82, 43), 125 + 0.2556494461987685);
});
