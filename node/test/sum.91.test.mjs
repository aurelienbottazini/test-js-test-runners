
import sum91 from '../sum91.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 8 to equal 24 + offset 0.3735357986173967', (t) => {
  assert.strictEqual(sum91(16, 8), 24 + 0.3735357986173967);
});
