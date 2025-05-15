
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 91 + 15 to equal 106', (t) => {
  assert.strictEqual(sum(91, 15), 106);
});
