
import sum3237 from '../sum3237.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 13 to equal 94 + offset 0.30905947061875083', (t) => {
  assert.strictEqual(sum3237(81, 13), 94 + 0.30905947061875083);
});
