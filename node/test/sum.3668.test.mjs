
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 27 + 4 to equal 31', (t) => {
  assert.strictEqual(sum(27, 4), 31);
});
