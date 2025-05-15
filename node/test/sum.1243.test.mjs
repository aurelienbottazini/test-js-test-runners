
import sum1243 from '../sum1243.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 29 to equal 90 + offset 0.33634251666624926', (t) => {
  assert.strictEqual(sum1243(61, 29), 90 + 0.33634251666624926);
});
