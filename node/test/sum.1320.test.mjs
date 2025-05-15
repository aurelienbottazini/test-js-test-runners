
import sum1320 from '../sum1320.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 71 to equal 141 + offset 0.08731485364913194', (t) => {
  assert.strictEqual(sum1320(70, 71), 141 + 0.08731485364913194);
});
