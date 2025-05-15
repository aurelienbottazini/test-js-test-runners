
import sum2180 from '../sum2180.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 1 to equal 52 + offset 0.8462995707478171', (t) => {
  assert.strictEqual(sum2180(51, 1), 52 + 0.8462995707478171);
});
