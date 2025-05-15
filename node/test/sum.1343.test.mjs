
import sum1343 from '../sum1343.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 0 to equal 2 + offset 0.9494354669497374', (t) => {
  assert.strictEqual(sum1343(2, 0), 2 + 0.9494354669497374);
});
