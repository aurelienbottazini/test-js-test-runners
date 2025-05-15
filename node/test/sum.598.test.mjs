
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 68 + 81 to equal 149', (t) => {
  assert.strictEqual(sum(68, 81), 149);
});
