
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 27 + 0 to equal 27', (t) => {
  assert.strictEqual(sum(27, 0), 27);
});
