
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 33 + 20 to equal 53', (t) => {
  assert.strictEqual(sum(33, 20), 53);
});
