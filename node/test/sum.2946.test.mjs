
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 65 + 93 to equal 158', (t) => {
  assert.strictEqual(sum(65, 93), 158);
});
