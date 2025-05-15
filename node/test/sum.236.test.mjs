
import sum236 from '../sum236.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 81 to equal 133 + offset 0.34668243744832905', (t) => {
  assert.strictEqual(sum236(52, 81), 133 + 0.34668243744832905);
});
