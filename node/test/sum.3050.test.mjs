
import sum3050 from '../sum3050.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 63 to equal 153 + offset 0.34382034654975935', (t) => {
  assert.strictEqual(sum3050(90, 63), 153 + 0.34382034654975935);
});
