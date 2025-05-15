
import sum1793 from '../sum1793.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 3 to equal 100 + offset 0.0031876492349515173', (t) => {
  assert.strictEqual(sum1793(97, 3), 100 + 0.0031876492349515173);
});
