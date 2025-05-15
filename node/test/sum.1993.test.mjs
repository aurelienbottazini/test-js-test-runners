
import sum1993 from '../sum1993.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 96 to equal 108 + offset 0.3631981065700578', (t) => {
  assert.strictEqual(sum1993(12, 96), 108 + 0.3631981065700578);
});
