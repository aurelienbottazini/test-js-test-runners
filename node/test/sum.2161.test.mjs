
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 96 + 66 to equal 162', (t) => {
  assert.strictEqual(sum(96, 66), 162);
});
