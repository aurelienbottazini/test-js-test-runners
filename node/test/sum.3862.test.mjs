
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 22 + 14 to equal 36', (t) => {
  assert.strictEqual(sum(22, 14), 36);
});
