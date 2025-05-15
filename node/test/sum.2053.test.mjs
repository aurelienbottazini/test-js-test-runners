
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 45 + 13 to equal 58', (t) => {
  assert.strictEqual(sum(45, 13), 58);
});
