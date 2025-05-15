
import sum1980 from '../sum1980.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 67 to equal 114 + offset 0.4568337959581378', (t) => {
  assert.strictEqual(sum1980(47, 67), 114 + 0.4568337959581378);
});
