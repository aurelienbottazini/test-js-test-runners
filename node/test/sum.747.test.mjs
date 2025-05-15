
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 79 + 70 to equal 149', (t) => {
  assert.strictEqual(sum(79, 70), 149);
});
