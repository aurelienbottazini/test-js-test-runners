
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 68 + 94 to equal 162', (t) => {
  assert.strictEqual(sum(68, 94), 162);
});
