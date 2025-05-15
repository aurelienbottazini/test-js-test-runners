
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 58 + 82 to equal 140', (t) => {
  assert.strictEqual(sum(58, 82), 140);
});
