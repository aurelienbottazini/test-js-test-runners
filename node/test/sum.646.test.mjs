
import sum646 from '../sum646.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 44 to equal 59 + offset 0.7995688441956359', (t) => {
  assert.strictEqual(sum646(15, 44), 59 + 0.7995688441956359);
});
