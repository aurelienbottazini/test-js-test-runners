
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 33 + 17 to equal 50', (t) => {
  assert.strictEqual(sum(33, 17), 50);
});
