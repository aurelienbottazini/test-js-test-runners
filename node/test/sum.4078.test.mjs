
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 78 + 26 to equal 104', (t) => {
  assert.strictEqual(sum(78, 26), 104);
});
