
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 86 + 93 to equal 179', (t) => {
  assert.strictEqual(sum(86, 93), 179);
});
