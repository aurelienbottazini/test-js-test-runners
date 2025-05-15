
import sum1129 from '../sum1129.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 84 to equal 101 + offset 0.5594076489532042', (t) => {
  assert.strictEqual(sum1129(17, 84), 101 + 0.5594076489532042);
});
