
import sum1663 from '../sum1663.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 79 to equal 113 + offset 0.21018787154311747', (t) => {
  assert.strictEqual(sum1663(34, 79), 113 + 0.21018787154311747);
});
