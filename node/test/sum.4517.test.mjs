
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 95 + 73 to equal 168', (t) => {
  assert.strictEqual(sum(95, 73), 168);
});
