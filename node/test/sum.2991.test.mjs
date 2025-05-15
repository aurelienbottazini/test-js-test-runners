
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 2 + 15 to equal 17', (t) => {
  assert.strictEqual(sum(2, 15), 17);
});
