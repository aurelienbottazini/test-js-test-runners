
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 76 + 71 to equal 147', (t) => {
  assert.strictEqual(sum(76, 71), 147);
});
