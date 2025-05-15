
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 12 + 25 to equal 37', (t) => {
  assert.strictEqual(sum(12, 25), 37);
});
