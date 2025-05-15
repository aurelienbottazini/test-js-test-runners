
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 50 + 99 to equal 149', (t) => {
  assert.strictEqual(sum(50, 99), 149);
});
