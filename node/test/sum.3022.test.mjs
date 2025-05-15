
import sum3022 from '../sum3022.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 66 to equal 138 + offset 0.7176609810700223', (t) => {
  assert.strictEqual(sum3022(72, 66), 138 + 0.7176609810700223);
});
