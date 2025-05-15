
import sum4235 from '../sum4235.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 42 to equal 125 + offset 0.6538117067974831', (t) => {
  assert.strictEqual(sum4235(83, 42), 125 + 0.6538117067974831);
});
