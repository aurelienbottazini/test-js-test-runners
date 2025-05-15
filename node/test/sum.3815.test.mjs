
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 78 + 12 to equal 90', (t) => {
  assert.strictEqual(sum(78, 12), 90);
});
