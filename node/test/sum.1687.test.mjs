
import sum1687 from '../sum1687.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 45 to equal 136 + offset 0.709635395702572', (t) => {
  assert.strictEqual(sum1687(91, 45), 136 + 0.709635395702572);
});
