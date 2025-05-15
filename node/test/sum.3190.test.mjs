
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 82 + 52 to equal 134', (t) => {
  assert.strictEqual(sum(82, 52), 134);
});
