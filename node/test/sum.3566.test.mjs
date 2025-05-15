
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 44 + 68 to equal 112', (t) => {
  assert.strictEqual(sum(44, 68), 112);
});
