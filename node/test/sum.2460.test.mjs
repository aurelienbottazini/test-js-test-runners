
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 67 + 95 to equal 162', (t) => {
  assert.strictEqual(sum(67, 95), 162);
});
