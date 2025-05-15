
import sum2826 from '../sum2826.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 61 to equal 112 + offset 0.10455215192491818', (t) => {
  assert.strictEqual(sum2826(51, 61), 112 + 0.10455215192491818);
});
