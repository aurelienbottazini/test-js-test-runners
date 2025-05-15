
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 53 + 25 to equal 78', (t) => {
  assert.strictEqual(sum(53, 25), 78);
});
