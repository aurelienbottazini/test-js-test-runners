
import sum326 from '../sum326.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 41 to equal 103 + offset 0.6226303974541572', (t) => {
  assert.strictEqual(sum326(62, 41), 103 + 0.6226303974541572);
});
