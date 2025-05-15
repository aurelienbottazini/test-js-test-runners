
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 89 + 45 to equal 134', (t) => {
  assert.strictEqual(sum(89, 45), 134);
});
