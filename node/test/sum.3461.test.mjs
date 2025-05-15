
import sum3461 from '../sum3461.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 12 to equal 34 + offset 0.7406006517134854', (t) => {
  assert.strictEqual(sum3461(22, 12), 34 + 0.7406006517134854);
});
