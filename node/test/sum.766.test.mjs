
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 14 + 22 to equal 36', (t) => {
  assert.strictEqual(sum(14, 22), 36);
});
