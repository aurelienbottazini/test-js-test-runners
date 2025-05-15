
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 49 + 41 to equal 90', (t) => {
  assert.strictEqual(sum(49, 41), 90);
});
