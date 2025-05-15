
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 45 + 21 to equal 66', (t) => {
  assert.strictEqual(sum(45, 21), 66);
});
