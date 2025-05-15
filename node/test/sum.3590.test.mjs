
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 12 + 82 to equal 94', (t) => {
  assert.strictEqual(sum(12, 82), 94);
});
