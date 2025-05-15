
import sum1988 from '../sum1988.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 34 to equal 127 + offset 0.09725853046355071', (t) => {
  assert.strictEqual(sum1988(93, 34), 127 + 0.09725853046355071);
});
