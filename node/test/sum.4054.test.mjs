
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 37 + 25 to equal 62', (t) => {
  assert.strictEqual(sum(37, 25), 62);
});
