
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 58 + 20 to equal 78', (t) => {
  assert.strictEqual(sum(58, 20), 78);
});
