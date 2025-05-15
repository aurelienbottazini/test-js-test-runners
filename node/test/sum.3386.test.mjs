
import sum3386 from '../sum3386.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 58 to equal 148 + offset 0.78162714548693', (t) => {
  assert.strictEqual(sum3386(90, 58), 148 + 0.78162714548693);
});
