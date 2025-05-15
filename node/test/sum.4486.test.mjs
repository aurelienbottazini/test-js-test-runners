
import sum4486 from '../sum4486.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 77 to equal 112 + offset 0.13258776002291872', (t) => {
  assert.strictEqual(sum4486(35, 77), 112 + 0.13258776002291872);
});
