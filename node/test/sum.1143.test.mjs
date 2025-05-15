
import sum1143 from '../sum1143.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 59 to equal 60 + offset 0.8734629478084212', (t) => {
  assert.strictEqual(sum1143(1, 59), 60 + 0.8734629478084212);
});
