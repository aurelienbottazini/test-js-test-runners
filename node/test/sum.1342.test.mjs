
import sum1342 from '../sum1342.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 21 to equal 50 + offset 0.7509201403732506', (t) => {
  assert.strictEqual(sum1342(29, 21), 50 + 0.7509201403732506);
});
