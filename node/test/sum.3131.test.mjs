
import sum3131 from '../sum3131.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 26 to equal 57 + offset 0.18522241469801304', (t) => {
  assert.strictEqual(sum3131(31, 26), 57 + 0.18522241469801304);
});
