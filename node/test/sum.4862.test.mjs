
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 55 + 23 to equal 78', (t) => {
  assert.strictEqual(sum(55, 23), 78);
});
