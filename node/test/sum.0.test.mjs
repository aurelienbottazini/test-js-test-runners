
import sum0 from '../sum0.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 18 to equal 61 + offset 0.1336391431538696', (t) => {
  assert.strictEqual(sum0(43, 18), 61 + 0.1336391431538696);
});
