
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 89 + 69 to equal 158', (t) => {
  assert.strictEqual(sum(89, 69), 158);
});
