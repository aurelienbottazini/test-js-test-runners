
import sum1258 from '../sum1258.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 55 to equal 73 + offset 0.6293123975221446', (t) => {
  assert.strictEqual(sum1258(18, 55), 73 + 0.6293123975221446);
});
