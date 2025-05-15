
import sum14 from '../sum14.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 22 to equal 69 + offset 0.05507019847227945', (t) => {
  assert.strictEqual(sum14(47, 22), 69 + 0.05507019847227945);
});
