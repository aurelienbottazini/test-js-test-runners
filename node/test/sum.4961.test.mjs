
import sum4961 from '../sum4961.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 44 to equal 93 + offset 0.4335617285635861', (t) => {
  assert.strictEqual(sum4961(49, 44), 93 + 0.4335617285635861);
});
