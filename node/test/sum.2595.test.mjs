
import sum2595 from '../sum2595.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 26 to equal 48 + offset 0.005126651451763831', (t) => {
  assert.strictEqual(sum2595(22, 26), 48 + 0.005126651451763831);
});
