
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 77 + 13 to equal 90', (t) => {
  assert.strictEqual(sum(77, 13), 90);
});
