
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 6 + 82 to equal 88', (t) => {
  assert.strictEqual(sum(6, 82), 88);
});
