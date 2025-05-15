
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 17 + 83 to equal 100', (t) => {
  assert.strictEqual(sum(17, 83), 100);
});
