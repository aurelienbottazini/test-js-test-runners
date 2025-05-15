
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 1 + 52 to equal 53', (t) => {
  assert.strictEqual(sum(1, 52), 53);
});
