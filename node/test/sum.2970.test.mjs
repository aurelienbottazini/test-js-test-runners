
import sum2970 from '../sum2970.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 6 to equal 22 + offset 0.406889346560094', (t) => {
  assert.strictEqual(sum2970(16, 6), 22 + 0.406889346560094);
});
