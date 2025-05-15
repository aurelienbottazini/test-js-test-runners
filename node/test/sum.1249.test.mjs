
import sum1249 from '../sum1249.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 74 to equal 151 + offset 0.5479494290166718', (t) => {
  assert.strictEqual(sum1249(77, 74), 151 + 0.5479494290166718);
});
