
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 27 + 6 to equal 33', (t) => {
  assert.strictEqual(sum(27, 6), 33);
});
