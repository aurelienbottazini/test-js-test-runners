
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 75 + 31 to equal 106', (t) => {
  assert.strictEqual(sum(75, 31), 106);
});
