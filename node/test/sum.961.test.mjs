
import sum961 from '../sum961.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 91 to equal 185 + offset 0.7305813581012367', (t) => {
  assert.strictEqual(sum961(94, 91), 185 + 0.7305813581012367);
});
