
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 86 + 65 to equal 151', (t) => {
  assert.strictEqual(sum(86, 65), 151);
});
