
import sum2383 from '../sum2383.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 71 to equal 92 + offset 0.9415977591976958', (t) => {
  assert.strictEqual(sum2383(21, 71), 92 + 0.9415977591976958);
});
