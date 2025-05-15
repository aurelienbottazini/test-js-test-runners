
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 11 + 78 to equal 89', (t) => {
  assert.strictEqual(sum(11, 78), 89);
});
