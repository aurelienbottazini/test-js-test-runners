
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 83 + 65 to equal 148', (t) => {
  assert.strictEqual(sum(83, 65), 148);
});
