
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 27 + 23 to equal 50', (t) => {
  assert.strictEqual(sum(27, 23), 50);
});
