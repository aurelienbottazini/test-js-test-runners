
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 35 + 71 to equal 106', (t) => {
  assert.strictEqual(sum(35, 71), 106);
});
