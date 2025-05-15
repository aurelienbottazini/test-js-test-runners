
import sum2182 from '../sum2182.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 11 to equal 54 + offset 0.5657713269604834', (t) => {
  assert.strictEqual(sum2182(43, 11), 54 + 0.5657713269604834);
});
