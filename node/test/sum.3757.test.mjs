
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 91 + 97 to equal 188', (t) => {
  assert.strictEqual(sum(91, 97), 188);
});
