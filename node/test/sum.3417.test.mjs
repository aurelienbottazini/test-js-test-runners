
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 91 + 56 to equal 147', (t) => {
  assert.strictEqual(sum(91, 56), 147);
});
