
import sum3119 from '../sum3119.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 93 to equal 179 + offset 0.8622182529650013', (t) => {
  assert.strictEqual(sum3119(86, 93), 179 + 0.8622182529650013);
});
