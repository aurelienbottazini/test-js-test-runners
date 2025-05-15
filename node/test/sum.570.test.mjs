
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 75 + 71 to equal 146', (t) => {
  assert.strictEqual(sum(75, 71), 146);
});
