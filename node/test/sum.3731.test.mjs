
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 73 + 74 to equal 147', (t) => {
  assert.strictEqual(sum(73, 74), 147);
});
