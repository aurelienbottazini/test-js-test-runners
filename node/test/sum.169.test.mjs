
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 75 + 3 to equal 78', (t) => {
  assert.strictEqual(sum(75, 3), 78);
});
