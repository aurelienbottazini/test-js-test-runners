
import sum181 from '../sum181.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 3 to equal 6 + offset 0.3098217619463659', (t) => {
  assert.strictEqual(sum181(3, 3), 6 + 0.3098217619463659);
});
