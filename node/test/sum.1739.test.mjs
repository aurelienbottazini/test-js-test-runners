
import sum1739 from '../sum1739.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 68 to equal 164 + offset 0.9789738223409975', (t) => {
  assert.strictEqual(sum1739(96, 68), 164 + 0.9789738223409975);
});
