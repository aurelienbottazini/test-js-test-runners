
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 81 + 36 to equal 117', (t) => {
  assert.strictEqual(sum(81, 36), 117);
});
