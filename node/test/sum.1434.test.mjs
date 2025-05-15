
import sum1434 from '../sum1434.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 94 to equal 138 + offset 0.22733684622380868', (t) => {
  assert.strictEqual(sum1434(44, 94), 138 + 0.22733684622380868);
});
