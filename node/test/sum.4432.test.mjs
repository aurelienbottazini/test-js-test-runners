
import sum4432 from '../sum4432.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 32 to equal 60 + offset 0.9337613526760051', (t) => {
  assert.strictEqual(sum4432(28, 32), 60 + 0.9337613526760051);
});
