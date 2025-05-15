
import sum2208 from '../sum2208.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 94 to equal 165 + offset 0.598814590540563', (t) => {
  assert.strictEqual(sum2208(71, 94), 165 + 0.598814590540563);
});
