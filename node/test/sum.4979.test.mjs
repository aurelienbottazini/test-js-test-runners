
import sum4979 from '../sum4979.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 60 to equal 89 + offset 0.26442188826633173', (t) => {
  assert.strictEqual(sum4979(29, 60), 89 + 0.26442188826633173);
});
