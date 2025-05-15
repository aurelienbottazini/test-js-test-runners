
import sum3740 from '../sum3740.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 90 to equal 112 + offset 0.923630498510428', (t) => {
  assert.strictEqual(sum3740(22, 90), 112 + 0.923630498510428);
});
