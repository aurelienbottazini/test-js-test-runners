
import sum1394 from '../sum1394.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 37 to equal 37 + offset 0.032051254766993664', (t) => {
  assert.strictEqual(sum1394(0, 37), 37 + 0.032051254766993664);
});
