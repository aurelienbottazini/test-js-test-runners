
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 17 + 4 to equal 21', (t) => {
  assert.strictEqual(sum(17, 4), 21);
});
