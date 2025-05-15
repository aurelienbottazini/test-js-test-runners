
import sum1229 from '../sum1229.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 62 to equal 156 + offset 0.43160834889628064', (t) => {
  assert.strictEqual(sum1229(94, 62), 156 + 0.43160834889628064);
});
