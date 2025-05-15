
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 61 + 7 to equal 68', (t) => {
  assert.strictEqual(sum(61, 7), 68);
});
