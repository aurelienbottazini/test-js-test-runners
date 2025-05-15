
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 8 + 44 to equal 52', (t) => {
  assert.strictEqual(sum(8, 44), 52);
});
