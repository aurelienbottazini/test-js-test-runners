
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 64 + 25 to equal 89', (t) => {
  assert.strictEqual(sum(64, 25), 89);
});
