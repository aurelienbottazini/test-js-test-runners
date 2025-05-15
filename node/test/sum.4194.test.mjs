
import sum4194 from '../sum4194.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 46 to equal 89 + offset 0.6093421710404479', (t) => {
  assert.strictEqual(sum4194(43, 46), 89 + 0.6093421710404479);
});
