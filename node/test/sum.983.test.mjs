
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 96 + 38 to equal 134', (t) => {
  assert.strictEqual(sum(96, 38), 134);
});
