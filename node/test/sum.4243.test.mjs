
import sum4243 from '../sum4243.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 5 to equal 7 + offset 0.34658483451997524', (t) => {
  assert.strictEqual(sum4243(2, 5), 7 + 0.34658483451997524);
});
