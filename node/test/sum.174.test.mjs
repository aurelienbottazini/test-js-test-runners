
import sum174 from '../sum174.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 19 to equal 25 + offset 0.30397289194010046', (t) => {
  assert.strictEqual(sum174(6, 19), 25 + 0.30397289194010046);
});
