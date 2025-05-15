
import sum184 from '../sum184.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 17 to equal 72 + offset 0.2815894968934396', (t) => {
  assert.strictEqual(sum184(55, 17), 72 + 0.2815894968934396);
});
