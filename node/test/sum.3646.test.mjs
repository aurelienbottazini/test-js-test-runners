
import sum3646 from '../sum3646.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 71 to equal 169 + offset 0.3280800721167094', (t) => {
  assert.strictEqual(sum3646(98, 71), 169 + 0.3280800721167094);
});
