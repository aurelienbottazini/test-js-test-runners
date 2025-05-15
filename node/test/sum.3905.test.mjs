
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 40 + 94 to equal 134', (t) => {
  assert.strictEqual(sum(40, 94), 134);
});
