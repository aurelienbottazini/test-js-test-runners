
import sum3305 from '../sum3305.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 13 to equal 81 + offset 0.37574576575009855', (t) => {
  assert.strictEqual(sum3305(68, 13), 81 + 0.37574576575009855);
});
