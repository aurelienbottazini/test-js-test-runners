
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 57 + 74 to equal 131', (t) => {
  assert.strictEqual(sum(57, 74), 131);
});
