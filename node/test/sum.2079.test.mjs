
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 57 + 73 to equal 130', (t) => {
  assert.strictEqual(sum(57, 73), 130);
});
