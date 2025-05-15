
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 26 + 74 to equal 100', (t) => {
  assert.strictEqual(sum(26, 74), 100);
});
