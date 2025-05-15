
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 57 + 17 to equal 74', (t) => {
  assert.strictEqual(sum(57, 17), 74);
});
