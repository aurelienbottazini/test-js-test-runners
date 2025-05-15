
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 22 + 2 to equal 24', (t) => {
  assert.strictEqual(sum(22, 2), 24);
});
