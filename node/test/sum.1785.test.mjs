
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 22 + 31 to equal 53', (t) => {
  assert.strictEqual(sum(22, 31), 53);
});
