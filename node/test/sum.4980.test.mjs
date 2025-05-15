
import sum4980 from '../sum4980.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 51 to equal 58 + offset 0.6810392439286568', (t) => {
  assert.strictEqual(sum4980(7, 51), 58 + 0.6810392439286568);
});
