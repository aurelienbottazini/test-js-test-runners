
import sum1034 from '../sum1034.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 97 to equal 115 + offset 0.09855947576435908', (t) => {
  assert.strictEqual(sum1034(18, 97), 115 + 0.09855947576435908);
});
