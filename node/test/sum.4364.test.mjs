
import sum4364 from '../sum4364.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 50 to equal 68 + offset 0.2007179993272864', (t) => {
  assert.strictEqual(sum4364(18, 50), 68 + 0.2007179993272864);
});
