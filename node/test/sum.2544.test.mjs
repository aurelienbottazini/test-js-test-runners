
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 84 + 78 to equal 162', (t) => {
  assert.strictEqual(sum(84, 78), 162);
});
