
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 65 + 38 to equal 103', (t) => {
  assert.strictEqual(sum(65, 38), 103);
});
