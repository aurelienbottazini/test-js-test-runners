
import sum3348 from '../sum3348.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 60 to equal 101 + offset 0.30232772114406226', (t) => {
  assert.strictEqual(sum3348(41, 60), 101 + 0.30232772114406226);
});
