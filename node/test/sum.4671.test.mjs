
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 73 + 89 to equal 162', (t) => {
  assert.strictEqual(sum(73, 89), 162);
});
