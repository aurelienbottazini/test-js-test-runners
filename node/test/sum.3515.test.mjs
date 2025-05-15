
import sum3515 from '../sum3515.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 58 to equal 137 + offset 0.8842701589981184', (t) => {
  assert.strictEqual(sum3515(79, 58), 137 + 0.8842701589981184);
});
