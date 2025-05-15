
import sum3185 from '../sum3185.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 71 to equal 166 + offset 0.3441343439836494', (t) => {
  assert.strictEqual(sum3185(95, 71), 166 + 0.3441343439836494);
});
