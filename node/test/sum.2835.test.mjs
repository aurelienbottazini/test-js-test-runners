
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 88 + 70 to equal 158', (t) => {
  assert.strictEqual(sum(88, 70), 158);
});
