
import sum3221 from '../sum3221.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 23 to equal 87 + offset 0.00561721605809451', (t) => {
  assert.strictEqual(sum3221(64, 23), 87 + 0.00561721605809451);
});
