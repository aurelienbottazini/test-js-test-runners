
import sum3378 from '../sum3378.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 48 to equal 85 + offset 0.9727125028716094', (t) => {
  assert.strictEqual(sum3378(37, 48), 85 + 0.9727125028716094);
});
