
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 85 + 78 to equal 163', (t) => {
  assert.strictEqual(sum(85, 78), 163);
});
