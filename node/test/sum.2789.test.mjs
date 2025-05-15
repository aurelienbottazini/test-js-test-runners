
import sum2789 from '../sum2789.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 39 to equal 85 + offset 0.26429335704401724', (t) => {
  assert.strictEqual(sum2789(46, 39), 85 + 0.26429335704401724);
});
