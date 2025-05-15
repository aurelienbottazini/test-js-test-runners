
import sum4063 from '../sum4063.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 23 to equal 38 + offset 0.6811024833336071', (t) => {
  assert.strictEqual(sum4063(15, 23), 38 + 0.6811024833336071);
});
