
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 21 + 57 to equal 78', (t) => {
  assert.strictEqual(sum(21, 57), 78);
});
