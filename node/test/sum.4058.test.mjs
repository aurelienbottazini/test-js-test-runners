
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 29 + 39 to equal 68', (t) => {
  assert.strictEqual(sum(29, 39), 68);
});
