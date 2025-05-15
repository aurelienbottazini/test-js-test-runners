
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 55 + 76 to equal 131', (t) => {
  assert.strictEqual(sum(55, 76), 131);
});
