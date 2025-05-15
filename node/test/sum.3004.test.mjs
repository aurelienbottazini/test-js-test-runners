
import sum3004 from '../sum3004.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 92 to equal 159 + offset 0.023864183432181774', (t) => {
  assert.strictEqual(sum3004(67, 92), 159 + 0.023864183432181774);
});
