
import sum561 from '../sum561.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 26 to equal 34 + offset 0.158420262614281', (t) => {
  assert.strictEqual(sum561(8, 26), 34 + 0.158420262614281);
});
