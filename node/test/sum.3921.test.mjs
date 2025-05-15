
import sum3921 from '../sum3921.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 29 to equal 112 + offset 0.5748696384571902', (t) => {
  assert.strictEqual(sum3921(83, 29), 112 + 0.5748696384571902);
});
