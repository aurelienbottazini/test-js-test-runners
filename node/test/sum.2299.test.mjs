
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 19 + 34 to equal 53', (t) => {
  assert.strictEqual(sum(19, 34), 53);
});
