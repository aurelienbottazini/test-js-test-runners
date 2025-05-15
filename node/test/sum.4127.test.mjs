
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 80 + 68 to equal 148', (t) => {
  assert.strictEqual(sum(80, 68), 148);
});
