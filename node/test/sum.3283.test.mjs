
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 85 + 49 to equal 134', (t) => {
  assert.strictEqual(sum(85, 49), 134);
});
