
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 86 + 67 to equal 153', (t) => {
  assert.strictEqual(sum(86, 67), 153);
});
