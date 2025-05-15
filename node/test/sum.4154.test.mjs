
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 45 + 36 to equal 81', (t) => {
  assert.strictEqual(sum(45, 36), 81);
});
