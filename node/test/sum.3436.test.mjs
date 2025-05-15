
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 82 + 3 to equal 85', (t) => {
  assert.strictEqual(sum(82, 3), 85);
});
