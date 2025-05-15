
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 55 + 95 to equal 150', (t) => {
  assert.strictEqual(sum(55, 95), 150);
});
