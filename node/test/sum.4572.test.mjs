
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 88 + 18 to equal 106', (t) => {
  assert.strictEqual(sum(88, 18), 106);
});
