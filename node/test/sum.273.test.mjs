
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 27 + 13 to equal 40', (t) => {
  assert.strictEqual(sum(27, 13), 40);
});
