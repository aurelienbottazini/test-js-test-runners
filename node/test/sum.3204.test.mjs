
import sum3204 from '../sum3204.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 59 to equal 135 + offset 0.9692819888049548', (t) => {
  assert.strictEqual(sum3204(76, 59), 135 + 0.9692819888049548);
});
