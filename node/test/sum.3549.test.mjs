
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 21 + 83 to equal 104', (t) => {
  assert.strictEqual(sum(21, 83), 104);
});
