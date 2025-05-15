
import sum4968 from '../sum4968.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 11 to equal 35 + offset 0.2640775907528029', (t) => {
  assert.strictEqual(sum4968(24, 11), 35 + 0.2640775907528029);
});
