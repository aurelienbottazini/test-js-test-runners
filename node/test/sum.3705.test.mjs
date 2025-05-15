
import sum3705 from '../sum3705.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 45 to equal 48 + offset 0.9070974083010143', (t) => {
  assert.strictEqual(sum3705(3, 45), 48 + 0.9070974083010143);
});
