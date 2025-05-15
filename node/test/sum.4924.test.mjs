
import sum4924 from '../sum4924.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 20 to equal 48 + offset 0.2021290431446906', (t) => {
  assert.strictEqual(sum4924(28, 20), 48 + 0.2021290431446906);
});
