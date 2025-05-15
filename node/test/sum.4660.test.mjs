
import sum4660 from '../sum4660.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 78 to equal 132 + offset 0.18231992975049682', (t) => {
  assert.strictEqual(sum4660(54, 78), 132 + 0.18231992975049682);
});
