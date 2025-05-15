
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 82 + 86 to equal 168', (t) => {
  assert.strictEqual(sum(82, 86), 168);
});
