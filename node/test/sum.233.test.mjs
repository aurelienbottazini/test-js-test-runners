
import sum233 from '../sum233.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 34 to equal 74 + offset 0.16366959644265844', (t) => {
  assert.strictEqual(sum233(40, 34), 74 + 0.16366959644265844);
});
