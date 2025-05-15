
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 27 + 47 to equal 74', (t) => {
  assert.strictEqual(sum(27, 47), 74);
});
