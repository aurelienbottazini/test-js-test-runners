
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 53 + 96 to equal 149', (t) => {
  assert.strictEqual(sum(53, 96), 149);
});
