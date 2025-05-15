
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 64 + 82 to equal 146', (t) => {
  assert.strictEqual(sum(64, 82), 146);
});
