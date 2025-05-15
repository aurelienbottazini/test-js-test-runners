
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 73 + 12 to equal 85', (t) => {
  assert.strictEqual(sum(73, 12), 85);
});
