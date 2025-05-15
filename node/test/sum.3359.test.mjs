
import sum3359 from '../sum3359.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 50 to equal 90 + offset 0.5523065827247862', (t) => {
  assert.strictEqual(sum3359(40, 50), 90 + 0.5523065827247862);
});
