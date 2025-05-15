
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 22 + 3 to equal 25', (t) => {
  assert.strictEqual(sum(22, 3), 25);
});
