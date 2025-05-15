
import sum3018 from '../sum3018.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 81 to equal 106 + offset 0.251265861185042', (t) => {
  assert.strictEqual(sum3018(25, 81), 106 + 0.251265861185042);
});
