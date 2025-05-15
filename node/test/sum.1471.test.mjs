
import sum1471 from '../sum1471.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 69 to equal 139 + offset 0.5468593302786916', (t) => {
  assert.strictEqual(sum1471(70, 69), 139 + 0.5468593302786916);
});
