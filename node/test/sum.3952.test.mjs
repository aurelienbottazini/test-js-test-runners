
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 67 + 80 to equal 147', (t) => {
  assert.strictEqual(sum(67, 80), 147);
});
