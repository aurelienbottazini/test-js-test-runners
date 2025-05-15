
import sum1905 from '../sum1905.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 60 to equal 105 + offset 0.02114318755419453', (t) => {
  assert.strictEqual(sum1905(45, 60), 105 + 0.02114318755419453);
});
