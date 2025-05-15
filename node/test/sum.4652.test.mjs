
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 82 + 87 to equal 169', (t) => {
  assert.strictEqual(sum(82, 87), 169);
});
