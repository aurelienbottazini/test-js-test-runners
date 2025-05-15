
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 17 + 87 to equal 104', (t) => {
  assert.strictEqual(sum(17, 87), 104);
});
