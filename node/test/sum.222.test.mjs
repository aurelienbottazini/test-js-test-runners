
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 98 + 48 to equal 146', (t) => {
  assert.strictEqual(sum(98, 48), 146);
});
