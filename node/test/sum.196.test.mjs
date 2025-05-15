
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 40 + 66 to equal 106', (t) => {
  assert.strictEqual(sum(40, 66), 106);
});
