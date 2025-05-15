
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 60 + 71 to equal 131', (t) => {
  assert.strictEqual(sum(60, 71), 131);
});
