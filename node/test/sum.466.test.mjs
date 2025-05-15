
import sum466 from '../sum466.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 12 to equal 77 + offset 0.2168245914954282', (t) => {
  assert.strictEqual(sum466(65, 12), 77 + 0.2168245914954282);
});
