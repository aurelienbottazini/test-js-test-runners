
import sum1019 from '../sum1019.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 58 to equal 156 + offset 0.4336311844951982', (t) => {
  assert.strictEqual(sum1019(98, 58), 156 + 0.4336311844951982);
});
