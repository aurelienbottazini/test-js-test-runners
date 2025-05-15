
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 10 + 58 to equal 68', (t) => {
  assert.strictEqual(sum(10, 58), 68);
});
