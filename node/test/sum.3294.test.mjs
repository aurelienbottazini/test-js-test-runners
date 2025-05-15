
import sum3294 from '../sum3294.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 30 to equal 119 + offset 0.7321865644295134', (t) => {
  assert.strictEqual(sum3294(89, 30), 119 + 0.7321865644295134);
});
