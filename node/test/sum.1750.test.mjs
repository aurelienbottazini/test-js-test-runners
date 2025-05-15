
import sum1750 from '../sum1750.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 47 to equal 139 + offset 0.61085486877049', (t) => {
  assert.strictEqual(sum1750(92, 47), 139 + 0.61085486877049);
});
