
import sum1926 from '../sum1926.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 93 to equal 153 + offset 0.30804756076282347', (t) => {
  assert.strictEqual(sum1926(60, 93), 153 + 0.30804756076282347);
});
