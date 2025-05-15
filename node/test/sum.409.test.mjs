
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 35 + 15 to equal 50', (t) => {
  assert.strictEqual(sum(35, 15), 50);
});
