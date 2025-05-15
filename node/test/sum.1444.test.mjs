
import sum1444 from '../sum1444.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 67 to equal 156 + offset 0.9021967243604232', (t) => {
  assert.strictEqual(sum1444(89, 67), 156 + 0.9021967243604232);
});
