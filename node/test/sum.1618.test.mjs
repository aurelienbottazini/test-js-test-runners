
import sum1618 from '../sum1618.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 64 to equal 143 + offset 0.6859402393287003', (t) => {
  assert.strictEqual(sum1618(79, 64), 143 + 0.6859402393287003);
});
