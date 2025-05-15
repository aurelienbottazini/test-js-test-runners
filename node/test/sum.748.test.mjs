
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 38 + 15 to equal 53', (t) => {
  assert.strictEqual(sum(38, 15), 53);
});
