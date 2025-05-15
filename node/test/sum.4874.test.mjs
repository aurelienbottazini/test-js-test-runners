
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 20 + 17 to equal 37', (t) => {
  assert.strictEqual(sum(20, 17), 37);
});
