
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 68 + 73 to equal 141', (t) => {
  assert.strictEqual(sum(68, 73), 141);
});
