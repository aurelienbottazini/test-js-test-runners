
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 68 + 44 to equal 112', (t) => {
  assert.strictEqual(sum(68, 44), 112);
});
