
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 78 + 0 to equal 78', (t) => {
  assert.strictEqual(sum(78, 0), 78);
});
