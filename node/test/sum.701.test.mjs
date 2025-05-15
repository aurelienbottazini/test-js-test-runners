
import sum701 from '../sum701.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 52 to equal 146 + offset 0.8199008284222', (t) => {
  assert.strictEqual(sum701(94, 52), 146 + 0.8199008284222);
});
