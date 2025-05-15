
import sum2515 from '../sum2515.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 96 to equal 159 + offset 0.6844404913567236', (t) => {
  assert.strictEqual(sum2515(63, 96), 159 + 0.6844404913567236);
});
