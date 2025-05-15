
import sum2618 from '../sum2618.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 43 to equal 113 + offset 0.14358746956579682', (t) => {
  assert.strictEqual(sum2618(70, 43), 113 + 0.14358746956579682);
});
