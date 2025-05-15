
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 47 + 87 to equal 134', (t) => {
  assert.strictEqual(sum(47, 87), 134);
});
