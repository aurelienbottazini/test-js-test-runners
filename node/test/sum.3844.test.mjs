
import sum3844 from '../sum3844.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 44 to equal 55 + offset 0.9124967488227508', (t) => {
  assert.strictEqual(sum3844(11, 44), 55 + 0.9124967488227508);
});
