
import sum3576 from '../sum3576.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 74 to equal 130 + offset 0.3473091676042136', (t) => {
  assert.strictEqual(sum3576(56, 74), 130 + 0.3473091676042136);
});
