
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 47 + 84 to equal 131', (t) => {
  assert.strictEqual(sum(47, 84), 131);
});
