
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 22 + 93 to equal 115', (t) => {
  assert.strictEqual(sum(22, 93), 115);
});
