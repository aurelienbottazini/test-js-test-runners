
import sum1405 from '../sum1405.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 3 to equal 77 + offset 0.024019919433946657', (t) => {
  assert.strictEqual(sum1405(74, 3), 77 + 0.024019919433946657);
});
