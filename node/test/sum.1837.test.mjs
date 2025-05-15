
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 37 + 0 to equal 37', (t) => {
  assert.strictEqual(sum(37, 0), 37);
});
