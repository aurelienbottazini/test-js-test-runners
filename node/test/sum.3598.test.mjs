
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 4 + 24 to equal 28', (t) => {
  assert.strictEqual(sum(4, 24), 28);
});
