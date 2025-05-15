
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 77 + 54 to equal 131', (t) => {
  assert.strictEqual(sum(77, 54), 131);
});
