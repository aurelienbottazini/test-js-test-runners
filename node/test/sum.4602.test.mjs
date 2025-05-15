
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 80 + 29 to equal 109', (t) => {
  assert.strictEqual(sum(80, 29), 109);
});
