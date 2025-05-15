
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 16 + 21 to equal 37', (t) => {
  assert.strictEqual(sum(16, 21), 37);
});
