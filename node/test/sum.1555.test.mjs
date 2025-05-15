
import sum1555 from '../sum1555.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 3 to equal 87 + offset 0.7535777238779899', (t) => {
  assert.strictEqual(sum1555(84, 3), 87 + 0.7535777238779899);
});
