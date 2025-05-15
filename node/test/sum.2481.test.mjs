
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 84 + 97 to equal 181', (t) => {
  assert.strictEqual(sum(84, 97), 181);
});
