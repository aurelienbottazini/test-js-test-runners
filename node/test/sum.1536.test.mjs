
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 59 + 29 to equal 88', (t) => {
  assert.strictEqual(sum(59, 29), 88);
});
