
import sum2639 from '../sum2639.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 93 to equal 157 + offset 0.8990146757687095', (t) => {
  assert.strictEqual(sum2639(64, 93), 157 + 0.8990146757687095);
});
