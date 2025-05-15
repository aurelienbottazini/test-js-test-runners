
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 78 + 71 to equal 149', (t) => {
  assert.strictEqual(sum(78, 71), 149);
});
