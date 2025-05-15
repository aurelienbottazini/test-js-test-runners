
import sum1036 from '../sum1036.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 6 to equal 13 + offset 0.21444537751657133', (t) => {
  assert.strictEqual(sum1036(7, 6), 13 + 0.21444537751657133);
});
