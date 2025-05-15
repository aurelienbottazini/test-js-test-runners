
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 79 + 55 to equal 134', (t) => {
  assert.strictEqual(sum(79, 55), 134);
});
