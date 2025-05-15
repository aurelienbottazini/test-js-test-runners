
import sum2420 from '../sum2420.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 91 to equal 151 + offset 0.13468626913621617', (t) => {
  assert.strictEqual(sum2420(60, 91), 151 + 0.13468626913621617);
});
