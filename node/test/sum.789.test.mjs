
import sum789 from '../sum789.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 95 to equal 176 + offset 0.7787411086409659', (t) => {
  assert.strictEqual(sum789(81, 95), 176 + 0.7787411086409659);
});
