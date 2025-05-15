
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 77 + 69 to equal 146', (t) => {
  assert.strictEqual(sum(77, 69), 146);
});
