
import sum3550 from '../sum3550.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 76 to equal 105 + offset 0.751543794676196', (t) => {
  assert.strictEqual(sum3550(29, 76), 105 + 0.751543794676196);
});
