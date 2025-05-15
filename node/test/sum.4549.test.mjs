
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 87 + 76 to equal 163', (t) => {
  assert.strictEqual(sum(87, 76), 163);
});
