
import sum1278 from '../sum1278.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 56 to equal 71 + offset 0.8296115860186699', (t) => {
  assert.strictEqual(sum1278(15, 56), 71 + 0.8296115860186699);
});
