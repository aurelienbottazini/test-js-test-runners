
import sum3673 from '../sum3673.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 73 to equal 157 + offset 0.24661795635065087', (t) => {
  assert.strictEqual(sum3673(84, 73), 157 + 0.24661795635065087);
});
