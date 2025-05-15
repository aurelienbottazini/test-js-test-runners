
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 21 + 82 to equal 103', (t) => {
  assert.strictEqual(sum(21, 82), 103);
});
