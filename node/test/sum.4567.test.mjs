
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 25 + 3 to equal 28', (t) => {
  assert.strictEqual(sum(25, 3), 28);
});
