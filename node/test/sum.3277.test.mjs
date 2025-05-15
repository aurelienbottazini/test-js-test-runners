
import sum3277 from '../sum3277.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 58 to equal 80 + offset 0.17764133277571748', (t) => {
  assert.strictEqual(sum3277(22, 58), 80 + 0.17764133277571748);
});
