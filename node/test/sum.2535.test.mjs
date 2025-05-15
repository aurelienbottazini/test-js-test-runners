
import sum2535 from '../sum2535.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 32 to equal 52 + offset 0.5040492893340903', (t) => {
  assert.strictEqual(sum2535(20, 32), 52 + 0.5040492893340903);
});
