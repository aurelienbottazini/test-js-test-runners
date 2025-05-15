
import sum327 from '../sum327.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 48 to equal 58 + offset 0.4420797927015091', (t) => {
  assert.strictEqual(sum327(10, 48), 58 + 0.4420797927015091);
});
