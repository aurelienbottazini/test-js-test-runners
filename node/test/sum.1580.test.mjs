
import sum1580 from '../sum1580.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 95 to equal 169 + offset 0.06420676269834491', (t) => {
  assert.strictEqual(sum1580(74, 95), 169 + 0.06420676269834491);
});
