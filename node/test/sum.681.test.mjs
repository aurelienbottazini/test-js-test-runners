
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 59 + 90 to equal 149', (t) => {
  assert.strictEqual(sum(59, 90), 149);
});
