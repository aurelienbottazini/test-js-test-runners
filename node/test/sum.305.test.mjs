
import sum305 from '../sum305.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 45 to equal 72 + offset 0.3133818372609968', (t) => {
  assert.strictEqual(sum305(27, 45), 72 + 0.3133818372609968);
});
