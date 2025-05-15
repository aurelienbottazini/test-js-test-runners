
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 11 + 6 to equal 17', (t) => {
  assert.strictEqual(sum(11, 6), 17);
});
