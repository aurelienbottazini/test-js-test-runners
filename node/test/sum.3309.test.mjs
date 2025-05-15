
import sum3309 from '../sum3309.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 45 to equal 57 + offset 0.8485969962207686', (t) => {
  assert.strictEqual(sum3309(12, 45), 57 + 0.8485969962207686);
});
