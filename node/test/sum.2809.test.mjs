
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 52 + 98 to equal 150', (t) => {
  assert.strictEqual(sum(52, 98), 150);
});
