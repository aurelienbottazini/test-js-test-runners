
import sum1691 from '../sum1691.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 78 to equal 152 + offset 0.9827211563716786', (t) => {
  assert.strictEqual(sum1691(74, 78), 152 + 0.9827211563716786);
});
