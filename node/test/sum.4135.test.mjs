
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 18 + 91 to equal 109', (t) => {
  assert.strictEqual(sum(18, 91), 109);
});
