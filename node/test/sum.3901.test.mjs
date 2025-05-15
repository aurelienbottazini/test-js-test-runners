
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 32 + 4 to equal 36', (t) => {
  assert.strictEqual(sum(32, 4), 36);
});
