
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 53 + 94 to equal 147', (t) => {
  assert.strictEqual(sum(53, 94), 147);
});
