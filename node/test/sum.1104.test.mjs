
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 72 + 86 to equal 158', (t) => {
  assert.strictEqual(sum(72, 86), 158);
});
