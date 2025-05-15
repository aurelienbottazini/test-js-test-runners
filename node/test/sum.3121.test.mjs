
import sum3121 from '../sum3121.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 6 to equal 66 + offset 0.19441446399771278', (t) => {
  assert.strictEqual(sum3121(60, 6), 66 + 0.19441446399771278);
});
