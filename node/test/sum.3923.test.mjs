
import sum3923 from '../sum3923.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 91 to equal 152 + offset 0.0978735011690538', (t) => {
  assert.strictEqual(sum3923(61, 91), 152 + 0.0978735011690538);
});
