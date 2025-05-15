
import sum1052 from '../sum1052.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 99 to equal 170 + offset 0.3612622123708523', (t) => {
  assert.strictEqual(sum1052(71, 99), 170 + 0.3612622123708523);
});
