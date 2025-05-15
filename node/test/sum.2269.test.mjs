
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 91 + 55 to equal 146', (t) => {
  assert.strictEqual(sum(91, 55), 146);
});
