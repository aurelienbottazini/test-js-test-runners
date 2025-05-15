
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 75 + 34 to equal 109', (t) => {
  assert.strictEqual(sum(75, 34), 109);
});
