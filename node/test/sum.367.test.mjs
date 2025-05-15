
import sum367 from '../sum367.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 68 to equal 123 + offset 0.6333585395762614', (t) => {
  assert.strictEqual(sum367(55, 68), 123 + 0.6333585395762614);
});
