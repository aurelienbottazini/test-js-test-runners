
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 81 + 68 to equal 149', (t) => {
  assert.strictEqual(sum(81, 68), 149);
});
