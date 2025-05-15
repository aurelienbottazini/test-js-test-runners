
import sum1002 from '../sum1002.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 30 to equal 56 + offset 0.8386649928726009', (t) => {
  assert.strictEqual(sum1002(26, 30), 56 + 0.8386649928726009);
});
