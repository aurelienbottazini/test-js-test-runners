
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 86 + 98 to equal 184', (t) => {
  assert.strictEqual(sum(86, 98), 184);
});
