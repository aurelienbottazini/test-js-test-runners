
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 68 to equal 158', (t) => {
  assert.strictEqual(sum(90, 68), 158);
});
