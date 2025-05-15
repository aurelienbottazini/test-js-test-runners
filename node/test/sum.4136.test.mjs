
import sum4136 from '../sum4136.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 3 to equal 44 + offset 0.6703670969655692', (t) => {
  assert.strictEqual(sum4136(41, 3), 44 + 0.6703670969655692);
});
