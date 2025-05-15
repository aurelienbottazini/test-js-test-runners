
import sum1392 from '../sum1392.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 15 to equal 52 + offset 0.7705974265654385', (t) => {
  assert.strictEqual(sum1392(37, 15), 52 + 0.7705974265654385);
});
