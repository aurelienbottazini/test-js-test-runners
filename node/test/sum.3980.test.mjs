
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 21 + 24 to equal 45', (t) => {
  assert.strictEqual(sum(21, 24), 45);
});
