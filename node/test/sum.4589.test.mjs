
import sum4589 from '../sum4589.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 77 to equal 150 + offset 0.6343769861640318', (t) => {
  assert.strictEqual(sum4589(73, 77), 150 + 0.6343769861640318);
});
