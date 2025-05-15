
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 82 + 79 to equal 161', (t) => {
  assert.strictEqual(sum(82, 79), 161);
});
