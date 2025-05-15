
import sum1633 from '../sum1633.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 6 to equal 94 + offset 0.5995531577327087', (t) => {
  assert.strictEqual(sum1633(88, 6), 94 + 0.5995531577327087);
});
