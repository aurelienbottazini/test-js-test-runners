
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 26 + 62 to equal 88', (t) => {
  assert.strictEqual(sum(26, 62), 88);
});
