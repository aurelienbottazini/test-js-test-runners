
import sum1268 from '../sum1268.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 88 to equal 88 + offset 0.782138009685822', (t) => {
  assert.strictEqual(sum1268(0, 88), 88 + 0.782138009685822);
});
