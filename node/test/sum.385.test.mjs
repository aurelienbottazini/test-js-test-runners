
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 9 + 76 to equal 85', (t) => {
  assert.strictEqual(sum(9, 76), 85);
});
