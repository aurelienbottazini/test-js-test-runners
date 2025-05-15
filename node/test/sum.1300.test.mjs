
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 47 + 59 to equal 106', (t) => {
  assert.strictEqual(sum(47, 59), 106);
});
