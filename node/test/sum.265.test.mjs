
import sum265 from '../sum265.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 94 to equal 102 + offset 0.28115625706784586', (t) => {
  assert.strictEqual(sum265(8, 94), 102 + 0.28115625706784586);
});
