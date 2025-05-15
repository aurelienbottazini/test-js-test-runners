
import sum3432 from '../sum3432.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 33 to equal 64 + offset 0.813327531785435', (t) => {
  assert.strictEqual(sum3432(31, 33), 64 + 0.813327531785435);
});
