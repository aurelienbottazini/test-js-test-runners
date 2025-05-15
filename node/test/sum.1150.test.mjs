
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 80 + 89 to equal 169', (t) => {
  assert.strictEqual(sum(80, 89), 169);
});
