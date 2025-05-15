
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 91 + 3 to equal 94', (t) => {
  assert.strictEqual(sum(91, 3), 94);
});
