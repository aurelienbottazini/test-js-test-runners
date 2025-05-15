
import sum3009 from '../sum3009.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 84 to equal 91 + offset 0.883605618178464', (t) => {
  assert.strictEqual(sum3009(7, 84), 91 + 0.883605618178464);
});
