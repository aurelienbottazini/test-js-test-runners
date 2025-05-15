
import sum4518 from '../sum4518.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 34 to equal 70 + offset 0.5299624857472945', (t) => {
  assert.strictEqual(sum4518(36, 34), 70 + 0.5299624857472945);
});
