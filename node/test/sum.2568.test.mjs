
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 16 + 99 to equal 115', (t) => {
  assert.strictEqual(sum(16, 99), 115);
});
