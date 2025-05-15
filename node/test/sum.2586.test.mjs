
import sum2586 from '../sum2586.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 35 to equal 92 + offset 0.8237499648417246', (t) => {
  assert.strictEqual(sum2586(57, 35), 92 + 0.8237499648417246);
});
