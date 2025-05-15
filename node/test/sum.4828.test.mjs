
import sum4828 from '../sum4828.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 19 to equal 24 + offset 0.7472979428104967', (t) => {
  assert.strictEqual(sum4828(5, 19), 24 + 0.7472979428104967);
});
