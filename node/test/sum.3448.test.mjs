
import sum3448 from '../sum3448.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 32 to equal 47 + offset 0.4471277028891071', (t) => {
  assert.strictEqual(sum3448(15, 32), 47 + 0.4471277028891071);
});
