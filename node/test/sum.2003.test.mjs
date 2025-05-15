
import sum2003 from '../sum2003.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 16 to equal 39 + offset 0.41537326510138506', (t) => {
  assert.strictEqual(sum2003(23, 16), 39 + 0.41537326510138506);
});
