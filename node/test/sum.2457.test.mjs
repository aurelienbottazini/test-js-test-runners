
import sum2457 from '../sum2457.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 52 to equal 108 + offset 0.12263691860427584', (t) => {
  assert.strictEqual(sum2457(56, 52), 108 + 0.12263691860427584);
});
