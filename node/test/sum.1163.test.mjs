
import sum1163 from '../sum1163.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 91 to equal 171 + offset 0.7883565340728632', (t) => {
  assert.strictEqual(sum1163(80, 91), 171 + 0.7883565340728632);
});
