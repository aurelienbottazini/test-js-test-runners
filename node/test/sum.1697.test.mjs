
import sum1697 from '../sum1697.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 11 to equal 37 + offset 0.4914180202944778', (t) => {
  assert.strictEqual(sum1697(26, 11), 37 + 0.4914180202944778);
});
