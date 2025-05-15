
import sum4778 from '../sum4778.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 93 to equal 105 + offset 0.1879268593213942', (t) => {
  assert.strictEqual(sum4778(12, 93), 105 + 0.1879268593213942);
});
