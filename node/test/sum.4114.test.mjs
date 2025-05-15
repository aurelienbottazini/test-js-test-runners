
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 38 + 47 to equal 85', (t) => {
  assert.strictEqual(sum(38, 47), 85);
});
