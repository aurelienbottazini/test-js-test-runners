
import sum4636 from '../sum4636.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 29 to equal 52 + offset 0.4704375306451334', (t) => {
  assert.strictEqual(sum4636(23, 29), 52 + 0.4704375306451334);
});
