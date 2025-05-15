
import sum1824 from '../sum1824.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 32 to equal 80 + offset 0.3595825975515815', (t) => {
  assert.strictEqual(sum1824(48, 32), 80 + 0.3595825975515815);
});
