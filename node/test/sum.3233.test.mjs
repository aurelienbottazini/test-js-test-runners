
import sum3233 from '../sum3233.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 11 to equal 76 + offset 0.9583814510352503', (t) => {
  assert.strictEqual(sum3233(65, 11), 76 + 0.9583814510352503);
});
