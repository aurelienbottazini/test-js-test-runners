
import sum2190 from '../sum2190.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 50 to equal 88 + offset 0.9677232597966663', (t) => {
  assert.strictEqual(sum2190(38, 50), 88 + 0.9677232597966663);
});
