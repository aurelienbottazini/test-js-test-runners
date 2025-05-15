
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 62 + 96 to equal 158', (t) => {
  assert.strictEqual(sum(62, 96), 158);
});
