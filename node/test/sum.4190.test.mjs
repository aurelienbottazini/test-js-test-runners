
import sum4190 from '../sum4190.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 60 to equal 112 + offset 0.11421823622825633', (t) => {
  assert.strictEqual(sum4190(52, 60), 112 + 0.11421823622825633);
});
