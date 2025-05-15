
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 19 + 86 to equal 105', (t) => {
  assert.strictEqual(sum(19, 86), 105);
});
