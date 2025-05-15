
import sum4390 from '../sum4390.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 13 to equal 20 + offset 0.8470528018626002', (t) => {
  assert.strictEqual(sum4390(7, 13), 20 + 0.8470528018626002);
});
