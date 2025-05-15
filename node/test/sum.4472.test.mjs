
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 3 + 69 to equal 72', (t) => {
  assert.strictEqual(sum(3, 69), 72);
});
