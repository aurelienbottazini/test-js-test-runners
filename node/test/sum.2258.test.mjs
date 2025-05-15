
import sum2258 from '../sum2258.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 77 to equal 95 + offset 0.5591898437713336', (t) => {
  assert.strictEqual(sum2258(18, 77), 95 + 0.5591898437713336);
});
