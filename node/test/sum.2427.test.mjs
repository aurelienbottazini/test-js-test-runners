
import sum2427 from '../sum2427.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 99 to equal 130 + offset 0.4083087179920436', (t) => {
  assert.strictEqual(sum2427(31, 99), 130 + 0.4083087179920436);
});
