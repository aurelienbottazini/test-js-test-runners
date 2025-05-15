
import sum885 from '../sum885.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 90 to equal 118 + offset 0.09091350043329538', (t) => {
  assert.strictEqual(sum885(28, 90), 118 + 0.09091350043329538);
});
