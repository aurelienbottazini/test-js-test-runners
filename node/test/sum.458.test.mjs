
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 78 + 39 to equal 117', (t) => {
  assert.strictEqual(sum(78, 39), 117);
});
