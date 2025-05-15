
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 5 + 73 to equal 78', (t) => {
  assert.strictEqual(sum(5, 73), 78);
});
