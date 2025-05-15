
import sum1283 from '../sum1283.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 91 to equal 92 + offset 0.5622330170070073', (t) => {
  assert.strictEqual(sum1283(1, 91), 92 + 0.5622330170070073);
});
