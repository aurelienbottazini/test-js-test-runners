
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 4 + 22 to equal 26', (t) => {
  assert.strictEqual(sum(4, 22), 26);
});
