
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 3 + 59 to equal 62', (t) => {
  assert.strictEqual(sum(3, 59), 62);
});
