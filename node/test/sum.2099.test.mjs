
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 36 + 81 to equal 117', (t) => {
  assert.strictEqual(sum(36, 81), 117);
});
