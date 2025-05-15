
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 17 + 73 to equal 90', (t) => {
  assert.strictEqual(sum(17, 73), 90);
});
