
import sum4533 from '../sum4533.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 40 to equal 134 + offset 0.535892857835354', (t) => {
  assert.strictEqual(sum4533(94, 40), 134 + 0.535892857835354);
});
