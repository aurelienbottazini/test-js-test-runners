
import sum988 from '../sum988.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 99 to equal 151 + offset 0.5533829879809129', (t) => {
  assert.strictEqual(sum988(52, 99), 151 + 0.5533829879809129);
});
