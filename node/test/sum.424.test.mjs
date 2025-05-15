
import sum424 from '../sum424.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 23 to equal 117 + offset 0.17826841963826157', (t) => {
  assert.strictEqual(sum424(94, 23), 117 + 0.17826841963826157);
});
