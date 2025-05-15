
import sum3451 from '../sum3451.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 87 to equal 170 + offset 0.00030208082666227654', (t) => {
  assert.strictEqual(sum3451(83, 87), 170 + 0.00030208082666227654);
});
