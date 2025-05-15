
import sum1217 from '../sum1217.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 13 to equal 80 + offset 0.9093542576971823', (t) => {
  assert.strictEqual(sum1217(67, 13), 80 + 0.9093542576971823);
});
