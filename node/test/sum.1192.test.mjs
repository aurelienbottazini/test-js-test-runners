
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 83 + 48 to equal 131', (t) => {
  assert.strictEqual(sum(83, 48), 131);
});
