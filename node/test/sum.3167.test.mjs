
import sum3167 from '../sum3167.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 18 to equal 53 + offset 0.8903463587326097', (t) => {
  assert.strictEqual(sum3167(35, 18), 53 + 0.8903463587326097);
});
