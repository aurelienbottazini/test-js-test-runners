
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 58 + 76 to equal 134', (t) => {
  assert.strictEqual(sum(58, 76), 134);
});
