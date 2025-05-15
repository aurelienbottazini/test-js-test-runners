
import sum1700 from '../sum1700.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 62 to equal 130 + offset 0.39677147094466836', (t) => {
  assert.strictEqual(sum1700(68, 62), 130 + 0.39677147094466836);
});
