
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 79 + 52 to equal 131', (t) => {
  assert.strictEqual(sum(79, 52), 131);
});
