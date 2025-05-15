
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 8 + 9 to equal 17', (t) => {
  assert.strictEqual(sum(8, 9), 17);
});
