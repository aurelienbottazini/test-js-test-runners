
import sum48 from '../sum48.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 97 to equal 112 + offset 0.3147172340964225', (t) => {
  assert.strictEqual(sum48(15, 97), 112 + 0.3147172340964225);
});
