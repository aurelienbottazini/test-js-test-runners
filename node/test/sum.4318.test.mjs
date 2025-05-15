
import sum4318 from '../sum4318.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 23 to equal 109 + offset 0.2457920162769598', (t) => {
  assert.strictEqual(sum4318(86, 23), 109 + 0.2457920162769598);
});
