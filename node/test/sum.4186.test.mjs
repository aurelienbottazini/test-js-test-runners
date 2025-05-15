
import sum4186 from '../sum4186.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 75 to equal 111 + offset 0.7321722560889122', (t) => {
  assert.strictEqual(sum4186(36, 75), 111 + 0.7321722560889122);
});
