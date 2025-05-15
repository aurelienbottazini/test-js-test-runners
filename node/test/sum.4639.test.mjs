
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 83 + 67 to equal 150', (t) => {
  assert.strictEqual(sum(83, 67), 150);
});
