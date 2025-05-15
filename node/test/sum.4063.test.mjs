
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 64 + 89 to equal 153', (t) => {
  assert.strictEqual(sum(64, 89), 153);
});
