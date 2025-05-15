
import sum229 from '../sum229.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 58 to equal 107 + offset 0.39293808456742796', (t) => {
  assert.strictEqual(sum229(49, 58), 107 + 0.39293808456742796);
});
