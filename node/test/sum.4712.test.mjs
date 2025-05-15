
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 78 + 72 to equal 150', (t) => {
  assert.strictEqual(sum(78, 72), 150);
});
