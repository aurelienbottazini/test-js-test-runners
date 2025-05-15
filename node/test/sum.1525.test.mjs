
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 29 + 57 to equal 86', (t) => {
  assert.strictEqual(sum(29, 57), 86);
});
