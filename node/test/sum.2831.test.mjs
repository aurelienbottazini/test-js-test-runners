
import sum2831 from '../sum2831.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 21 to equal 85 + offset 0.5593127149470353', (t) => {
  assert.strictEqual(sum2831(64, 21), 85 + 0.5593127149470353);
});
