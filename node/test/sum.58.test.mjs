
import sum58 from '../sum58.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 80 to equal 138 + offset 0.4247608428138012', (t) => {
  assert.strictEqual(sum58(58, 80), 138 + 0.4247608428138012);
});
