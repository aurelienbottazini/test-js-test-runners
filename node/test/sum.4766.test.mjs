
import sum4766 from '../sum4766.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 50 to equal 93 + offset 0.9265312091348824', (t) => {
  assert.strictEqual(sum4766(43, 50), 93 + 0.9265312091348824);
});
