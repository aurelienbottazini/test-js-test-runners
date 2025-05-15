
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 75 + 59 to equal 134', (t) => {
  assert.strictEqual(sum(75, 59), 134);
});
