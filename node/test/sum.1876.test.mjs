
import sum1876 from '../sum1876.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 72 to equal 80 + offset 0.9078947623536227', (t) => {
  assert.strictEqual(sum1876(8, 72), 80 + 0.9078947623536227);
});
