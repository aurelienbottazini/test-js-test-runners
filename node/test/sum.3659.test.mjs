
import sum3659 from '../sum3659.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 1 to equal 44 + offset 0.8392889176314017', (t) => {
  assert.strictEqual(sum3659(43, 1), 44 + 0.8392889176314017);
});
