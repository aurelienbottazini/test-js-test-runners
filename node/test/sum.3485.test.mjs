
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 86 + 83 to equal 169', (t) => {
  assert.strictEqual(sum(86, 83), 169);
});
