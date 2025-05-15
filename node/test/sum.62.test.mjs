
import sum62 from '../sum62.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 85 to equal 150 + offset 0.6949779699193784', (t) => {
  assert.strictEqual(sum62(65, 85), 150 + 0.6949779699193784);
});
