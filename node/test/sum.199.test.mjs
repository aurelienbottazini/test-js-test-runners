
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 8 + 18 to equal 26', (t) => {
  assert.strictEqual(sum(8, 18), 26);
});
