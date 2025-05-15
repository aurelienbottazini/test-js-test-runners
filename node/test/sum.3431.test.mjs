
import sum3431 from '../sum3431.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 7 to equal 55 + offset 0.270481725941798', (t) => {
  assert.strictEqual(sum3431(48, 7), 55 + 0.270481725941798);
});
