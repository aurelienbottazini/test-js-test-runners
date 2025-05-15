
import sum99 from '../sum99.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 43 to equal 63 + offset 0.058100259662193454', (t) => {
  assert.strictEqual(sum99(20, 43), 63 + 0.058100259662193454);
});
