
import sum1203 from '../sum1203.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 27 to equal 66 + offset 0.48009948108149625', (t) => {
  assert.strictEqual(sum1203(39, 27), 66 + 0.48009948108149625);
});
