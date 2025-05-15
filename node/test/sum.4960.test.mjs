
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 8 + 29 to equal 37', (t) => {
  assert.strictEqual(sum(8, 29), 37);
});
