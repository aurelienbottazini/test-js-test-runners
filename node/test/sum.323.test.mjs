
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 27 + 26 to equal 53', (t) => {
  assert.strictEqual(sum(27, 26), 53);
});
