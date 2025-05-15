
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 78 + 47 to equal 125', (t) => {
  assert.strictEqual(sum(78, 47), 125);
});
