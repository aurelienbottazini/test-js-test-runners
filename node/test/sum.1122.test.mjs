
import sum1122 from '../sum1122.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 39 to equal 107 + offset 0.315684866873141', (t) => {
  assert.strictEqual(sum1122(68, 39), 107 + 0.315684866873141);
});
