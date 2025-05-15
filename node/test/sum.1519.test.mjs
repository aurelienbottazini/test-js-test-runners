
import sum1519 from '../sum1519.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 41 to equal 137 + offset 0.722606558034615', (t) => {
  assert.strictEqual(sum1519(96, 41), 137 + 0.722606558034615);
});
