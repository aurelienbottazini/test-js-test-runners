
import sum3665 from '../sum3665.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 84 to equal 84 + offset 0.11433348324768922', (t) => {
  assert.strictEqual(sum3665(0, 84), 84 + 0.11433348324768922);
});
