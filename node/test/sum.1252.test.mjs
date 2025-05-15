
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 76 + 73 to equal 149', (t) => {
  assert.strictEqual(sum(76, 73), 149);
});
