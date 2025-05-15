
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 76 + 24 to equal 100', (t) => {
  assert.strictEqual(sum(76, 24), 100);
});
