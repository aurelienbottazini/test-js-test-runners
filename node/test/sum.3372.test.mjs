
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 39 + 86 to equal 125', (t) => {
  assert.strictEqual(sum(39, 86), 125);
});
