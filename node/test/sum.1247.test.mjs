
import sum1247 from '../sum1247.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 2 to equal 60 + offset 0.9791894461253433', (t) => {
  assert.strictEqual(sum1247(58, 2), 60 + 0.9791894461253433);
});
