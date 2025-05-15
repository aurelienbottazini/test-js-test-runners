
import sum2141 from '../sum2141.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 82 to equal 164 + offset 0.4940862055670352', (t) => {
  assert.strictEqual(sum2141(82, 82), 164 + 0.4940862055670352);
});
