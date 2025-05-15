
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 68 + 78 to equal 146', (t) => {
  assert.strictEqual(sum(68, 78), 146);
});
