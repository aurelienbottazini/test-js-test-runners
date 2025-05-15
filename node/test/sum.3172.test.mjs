
import sum3172 from '../sum3172.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 78 to equal 162 + offset 0.707846600249824', (t) => {
  assert.strictEqual(sum3172(84, 78), 162 + 0.707846600249824);
});
