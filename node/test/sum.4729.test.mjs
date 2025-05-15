
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 65 + 84 to equal 149', (t) => {
  assert.strictEqual(sum(65, 84), 149);
});
