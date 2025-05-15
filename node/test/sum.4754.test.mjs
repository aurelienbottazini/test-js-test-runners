
import sum4754 from '../sum4754.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 44 to equal 120 + offset 0.32044790984532834', (t) => {
  assert.strictEqual(sum4754(76, 44), 120 + 0.32044790984532834);
});
