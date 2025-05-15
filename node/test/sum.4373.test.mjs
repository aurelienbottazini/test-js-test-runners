
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 86 + 63 to equal 149', (t) => {
  assert.strictEqual(sum(86, 63), 149);
});
