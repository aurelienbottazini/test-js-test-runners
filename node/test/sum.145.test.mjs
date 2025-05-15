
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 82 + 48 to equal 130', (t) => {
  assert.strictEqual(sum(82, 48), 130);
});
