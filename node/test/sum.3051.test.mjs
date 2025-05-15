
import sum3051 from '../sum3051.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 91 to equal 101 + offset 0.17046342490488098', (t) => {
  assert.strictEqual(sum3051(10, 91), 101 + 0.17046342490488098);
});
