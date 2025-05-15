
import sum4645 from '../sum4645.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 1 to equal 15 + offset 0.5636167181840445', (t) => {
  assert.strictEqual(sum4645(14, 1), 15 + 0.5636167181840445);
});
