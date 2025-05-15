
import sum2633 from '../sum2633.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 39 to equal 62 + offset 0.3947717239060232', (t) => {
  assert.strictEqual(sum2633(23, 39), 62 + 0.3947717239060232);
});
