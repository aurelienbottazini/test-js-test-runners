
import sum3593 from '../sum3593.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 62 to equal 151 + offset 0.07226984649822965', (t) => {
  assert.strictEqual(sum3593(89, 62), 151 + 0.07226984649822965);
});
