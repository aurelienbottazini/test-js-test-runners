
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 30 + 32 to equal 62', (t) => {
  assert.strictEqual(sum(30, 32), 62);
});
