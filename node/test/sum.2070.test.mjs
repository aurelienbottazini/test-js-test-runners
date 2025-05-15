
import sum2070 from '../sum2070.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 8 to equal 58 + offset 0.6561000581198366', (t) => {
  assert.strictEqual(sum2070(50, 8), 58 + 0.6561000581198366);
});
