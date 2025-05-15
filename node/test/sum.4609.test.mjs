
import sum4609 from '../sum4609.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 59 to equal 149 + offset 0.18428102924015954', (t) => {
  assert.strictEqual(sum4609(90, 59), 149 + 0.18428102924015954);
});
