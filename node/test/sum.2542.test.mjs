
import sum2542 from '../sum2542.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 37 to equal 115 + offset 0.37756428501962724', (t) => {
  assert.strictEqual(sum2542(78, 37), 115 + 0.37756428501962724);
});
