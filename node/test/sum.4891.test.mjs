
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 80 + 66 to equal 146', (t) => {
  assert.strictEqual(sum(80, 66), 146);
});
