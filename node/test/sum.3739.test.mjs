
import sum3739 from '../sum3739.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 33 to equal 77 + offset 0.3934579207942839', (t) => {
  assert.strictEqual(sum3739(44, 33), 77 + 0.3934579207942839);
});
