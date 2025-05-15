
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 69 + 93 to equal 162', (t) => {
  assert.strictEqual(sum(69, 93), 162);
});
