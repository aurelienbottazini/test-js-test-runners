
import sum1982 from '../sum1982.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 97 to equal 191 + offset 0.4074929222453253', (t) => {
  assert.strictEqual(sum1982(94, 97), 191 + 0.4074929222453253);
});
