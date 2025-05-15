
import sum2863 from '../sum2863.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 1 to equal 70 + offset 0.739305503277454', (t) => {
  assert.strictEqual(sum2863(69, 1), 70 + 0.739305503277454);
});
