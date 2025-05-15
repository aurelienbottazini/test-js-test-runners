
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 39 + 51 to equal 90', (t) => {
  assert.strictEqual(sum(39, 51), 90);
});
