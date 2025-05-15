
import sum4208 from '../sum4208.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 17 to equal 89 + offset 0.25003872279835127', (t) => {
  assert.strictEqual(sum4208(72, 17), 89 + 0.25003872279835127);
});
