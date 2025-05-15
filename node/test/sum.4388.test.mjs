
import sum4388 from '../sum4388.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 15 to equal 49 + offset 0.8064338796642644', (t) => {
  assert.strictEqual(sum4388(34, 15), 49 + 0.8064338796642644);
});
