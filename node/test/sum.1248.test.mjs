
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 22 + 78 to equal 100', (t) => {
  assert.strictEqual(sum(22, 78), 100);
});
