
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 52 + 10 to equal 62', (t) => {
  assert.strictEqual(sum(52, 10), 62);
});
