
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 82 + 59 to equal 141', (t) => {
  assert.strictEqual(sum(82, 59), 141);
});
