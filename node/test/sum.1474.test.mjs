
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 22 + 84 to equal 106', (t) => {
  assert.strictEqual(sum(22, 84), 106);
});
