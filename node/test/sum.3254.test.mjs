
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 5 + 48 to equal 53', (t) => {
  assert.strictEqual(sum(5, 48), 53);
});
