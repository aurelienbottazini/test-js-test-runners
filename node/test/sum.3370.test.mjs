
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 8 + 86 to equal 94', (t) => {
  assert.strictEqual(sum(8, 86), 94);
});
