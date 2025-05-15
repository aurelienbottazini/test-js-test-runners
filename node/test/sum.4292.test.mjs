
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 19 + 5 to equal 24', (t) => {
  assert.strictEqual(sum(19, 5), 24);
});
