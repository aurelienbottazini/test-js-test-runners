
import sum2287 from '../sum2287.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 61 to equal 151 + offset 0.030903993579288636', (t) => {
  assert.strictEqual(sum2287(90, 61), 151 + 0.030903993579288636);
});
