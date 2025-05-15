
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 75 + 10 to equal 85', (t) => {
  assert.strictEqual(sum(75, 10), 85);
});
