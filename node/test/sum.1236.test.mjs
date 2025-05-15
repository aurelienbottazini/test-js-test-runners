
import sum1236 from '../sum1236.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 63 to equal 130 + offset 0.7036313689135818', (t) => {
  assert.strictEqual(sum1236(67, 63), 130 + 0.7036313689135818);
});
